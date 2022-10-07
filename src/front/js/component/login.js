import React from "react";
import loginEmailPassword from "../../../functions/loginEmailPassword";
import { Container, Form, Button, Stack } from "react-bootstrap";
import { useState } from "react";
import { app } from "../../../firebase/fb.js";

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
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      );
    } else {
      signInWithEmailAndPassword(auth, correo, contra);
    }
  }

  return (
    <div name="login" className="container m-auto">
      <div className="container-fluid">
        {logBtn ? (
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={handleLoginBtn}>
              Sign In/Register to Create Posts
            </button>
          </div>
        ) : (
          <div className="col-sm-1 col-md-6 m-auto">
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
                <div className="text-center">
                  <Button
                    variant="dark"
                    type="submit"
                    style={{ width: "300px", backgroundColor: "blue" }}
                  >
                    {estaRegistrandose ? "Register" : "Sign in"}
                  </Button>
                </div>
              </Form>
              <div className="text-center">
                <Button
                  style={{ width: "300px" }}
                  variant="secondary"
                  onClick={() => setEstaRegistrandose(!estaRegistrandose)}
                >
                  {estaRegistrandose ? "Sign in" : "Register"}
                </Button>
              </div>
            </Stack>
            <div className="text-center">
              <button className="btn btn-danger my-4" onClick={handleLoginBtn}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
