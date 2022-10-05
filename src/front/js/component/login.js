import React from "react";
import loginEmailPassword from "../../../functions/loginEmailPassword";
import { Container, Form, Button, Stack } from "react-bootstrap";
import { useState } from "react";
import { app } from "../../../firebase/fb.js";
import firebase from "../../../firebase/fb.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

function Login() {
  const [logBtn, setLogBtn] = useState(true);
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);

  const handleLoginBtn = () => {
    if (logBtn == true) {
      setLogBtn(false);
    } else {
      setLogBtn(true);
    }
  };
  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const contra = e.target.formBasicPassword.value;
    await loginEmailPassword(correo, contra);

    if (estaRegistrandose) {
      //si se registra
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      );
    } else {
      // si está iniciando sesión
      signInWithEmailAndPassword(auth, correo, contra);
    }
  }

  return (
    <div className="container m-auto">
      <div className="container-fluid">
        {logBtn ? (
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={handleLoginBtn}>
              Sign In
            </button>
          </div>
        ) : (
          <div className="col-sm-1 col-md-6 m-auto mb-4">
            <button className="btn btn-primary" onClick={handleLoginBtn}>
              Cancel
            </button>

            <h1>Create Posts</h1>
            <Stack gap={3}>
              <h1>{estaRegistrandose ? "Register" : "Sign in"}</h1>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="dark" type="submit">
                  {estaRegistrandose ? "Register" : "Sign in"}
                </Button>
              </Form>

              <Button
                variant="primary"
                type="submit"
                style={{ width: "300px" }}
                onClick={() => signInWithRedirect(auth, googleProvider)}
              >
                Sign in with Google
              </Button>

              <Button
                style={{ width: "300px" }}
                variant="secondary"
                onClick={() => setEstaRegistrandose(!estaRegistrandose)}
              >
                {estaRegistrandose ? "Sign in" : "Regístrate"}
              </Button>
            </Stack>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
