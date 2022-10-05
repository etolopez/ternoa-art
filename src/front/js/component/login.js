import React from "react";
import loginEmailPassword from "../../../functions/loginEmailPassword";
import { Container, Form, Button } from "react-bootstrap";

function Login() {
  async function submitHandler(e) {
    e.preventDefault();
    const correo = document.getElementById("formCorreo").value;
    const contra = e.target.formContra.value;
    await loginEmailPassword(correo, contra);
  }

  return (
    <div className="container m-auto">
      <div className="container-fluid">
        <h1>Sign in to Create Posts</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formCorreo">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formContra" className="mt-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" className="mt-4" type="submit">
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
