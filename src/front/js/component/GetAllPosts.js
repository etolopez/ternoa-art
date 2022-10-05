import React from "react";
import AOS from "aos";
import { useState, useEffect } from "react";
import { app } from "../../../firebase/fb.js";
import deletePost from "../../../functions/deletePost.js";

const GetAllPosts = ({ user }) => {
  const [docus, setDocus] = useState([]);

  function actualizarPosts() {
    GetAllPosts().then((docus) => {
      setDocus(docus);
    });
  }

  useEffect(() => {
    let docs = app
      .firestore()
      .collection("archive")
      .get()
      .then((snapshot) => snapshot.docs.map((x) => x.data()));
    docs.then((data) => setDocus(data));
  }, []);

  return (
    <div className="container">
      <div className="card-group mt-5">
        {docus.map((doc, index) => (
          <div className="col-md-6 p-4" data-aos="fade-left">
            <div className="card mb-3">
              <img src={doc.url} className="card-img-top text-dark" />
              <div className="card-body text-dark row">
                <div className="col-1">
                  <h2>{index + 1}</h2>
                </div>
                <div className="col-11">
                  <h4 className="card-title text-dark">{doc.title}</h4>
                  <p className="card-text text-dark">{doc.content}</p>
                </div>
              </div>
              {user ? (
                <div className="text-center">
                  <button className="btn btn-secondary">Edit</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deletePost(docus);
                      actualizarPosts();
                    }}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllPosts;
