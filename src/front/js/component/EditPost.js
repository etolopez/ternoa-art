import React from "react";
import { useState } from "react";
import { app } from "../../../firebase/fb.js";
import { Modal, Stack, Form, Button } from "react-bootstrap";

const EditPost = () => {
  // const [post, setPost] = useState(false);
  const [urlArchive, setUrlArchive] = useState("");
  const [docus, setDocus] = useState([]);

  const archiveHandler = async (e) => {
    const archive = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivePath = storageRef.child(archive.name);
    await archivePath.put(archive);
    console.log("archivo cargado", archive.name);
    const urlLink = await archivePath.getDownloadURL();
    setUrlArchive(urlLink);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const archiveName = e.target.nombre.value;
    const title = e.target.title.value;
    const content = e.target.content.value;

    if (!archiveName) {
      alert("Please add a name");
      return;
    }
    if (!title) {
      alert("Please write a title to your post");
      return;
    }
    if (!content) {
      alert("Write and awesome post!");
      return;
    }

    const collectionRef = app.firestore().collection("archive");
    const docu = await collectionRef.doc(archiveName).set({
      nombre: archiveName,
      url: urlArchive,
      title: title,
      content: content,
    });
    window.location = "/";
  };

  return (
    <div className="container">
      
       <Modal
      show={isModalEditar}
      onHide={() => {
        setIsModalEditar(false);
        setProductoEditar(null);
      }}
    >

       <Modal.Header>
        <Modal.Title>Editar producto</Modal.Title>
      </Modal.Header>

      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Control
            className="mb-5"
            type="file"
            onChange={archiveHandler}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="mb-2">Name the image</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="image name (for reference)"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-2">Name your Post</Form.Label>
          <Form.Control type="text" name="title" placeholder="Post title" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-2">
            Write something cool about the art!
          </Form.Label>
          <Form.Control
            className="py-5"
            type="text"
            name="content"
            placeholder="Write a post"
          />
        </Form.Group>

        <Button variant="primary" className="mt-4" type="submit">
          Post
        </Button>
      </Form>
      <Button
          variant="secondary"
          onClick={() => {
            setIsModalEditar(false);
            setProductoEditar(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarProductoModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>

    </div>
  );
};

export default EditPost;
