import React, { useState, useEffect } from "react";
import { app } from "../../../firebase/fb.js";
import deletePost from "../../../functions/deletePost.js";

const GetAllPosts = ({
  user,
  isModalEdit,
  setIsModalEdit,
  editPost,
  setEditPost,
}) => {
  const [docus, setDocus] = useState([]);

  useEffect(() => {
    let docs = app
      .firestore()
      .collection("archive")
      .get()
      .then((snapshot) => snapshot.docs.map((x) => x.data()));
    docs.then((data) => setDocus(data));
  }, []);

  function refereshPosts() {
    setDocus(docus);
    window.location = "/";
  }

  return (
    <div className="container">
      <div className="card-group mt-5">
        {docus.map((post, index) => (
          <div className="col-md-6 p-4" data-aos="fade-left">
            <div className="card mb-3">
              <img src={post.url} className="card-img-top text-dark" />
              <div className="card-body text-dark row">
                <div className="col-1">
                  <h2>{index + 1}</h2>
                </div>
                <div className="col-11">
                  <h4 className="card-title text-dark">{post.title}</h4>
                  <small>Author: {user.email}</small>
                  <p className="card-text text-dark">{post.content}</p>
                </div>
              </div>
              <div className="row text-center">
                <div className="col">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setEditPost({ ...post });
                      setIsModalEdit(true);
                    }}
                  >
                    Edit
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deletePost(post).then((confirmed) => {
                        refereshPosts();
                      });
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllPosts;
