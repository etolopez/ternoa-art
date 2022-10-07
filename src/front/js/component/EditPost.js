import React from "react";
import { useState } from "react";
import { Modal, Stack, Form, Button } from "react-bootstrap";
import editPostFn from "../../../functions/editPostFn";

const EditPost = ({
  user,
  isModalEdit,
  setIsModalEdit,
  editPost,
  setEditPost,
}) => {
  function editPostModal() {
    const archiveName = document.getElementById("nombre").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const postInfo = { archiveName, content, title };

    editPostFn(postInfo);
    setEditPost(null);
    setIsModalEdit(false);
  }

  const [postState, setPostState] = useState({ ...editPost });

  return (
    <Modal
      show={isModalEdit}
      onHide={() => {
        editPostModal(null);
        setIsModalEdit(false);
      }}
    >
      <Modal.Header>
        <Modal.Title className="text-dark">Edit post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Label className="mb-2 text-dark">Name the image</Form.Label>
            <Form.Control
              type="text"
              id="nombre"
              placeholder="image name (for reference)"
              onChange={(e) =>
                setPostState({
                  ...postState,
                  archiveName: e.target.value,
                })
              }
              value={postState?.archiveName}
            />

            <Form.Label className="mt-2 text-dark">Name your Post</Form.Label>
            <Form.Control
              type="text"
              id="title"
              placeholder="Post title"
              onChange={(e) => {
                setPostState({
                  ...postState,
                  title: e.target.value,
                });
              }}
              value={postState?.title}
            />

            <Form.Label className="mt-2 text-dark">
              Write something cool about the art!
            </Form.Label>
            <Form.Control
              className="py-5"
              id="content"
              type="text"
              placeholder="Write a post"
              onChange={(e) => {
                setPostState({
                  ...postState,
                  content: e.target.value,
                });
              }}
              value={postState?.content}
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEdit(false);
            editPostModal(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editPostModal}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPost;
