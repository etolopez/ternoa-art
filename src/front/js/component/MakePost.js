import React from "react";
import { useState } from "react";
import { app } from "../../../firebase/fb.js";
import { Form, Button } from "react-bootstrap";

const MakePost = () => {
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
    const id = Math.floor(Math.random() * 69);

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
      id: id,
    });
    window.location = "/";
  };

  return (
    <div className="container">
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

      <div className="card-group mt-5">
        {docus.map((doc) => (
          <div className="col-md-6 p-4">
            <div className="card mb-3">
              <img src={doc.url} className="card-img-top text-dark" />
              <div className="card-body text-dark">
                <h4 className="card-title text-dark">{doc.title}</h4>
                <p class="card-text text-dark">{doc.content}</p>
              </div>
              <button className="btn btn-secondary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MakePost;
