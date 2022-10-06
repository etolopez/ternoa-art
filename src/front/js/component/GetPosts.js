import React, { useState, useEffect } from "react";
import { app } from "../../../firebase/fb.js";

const GetPosts = () => {
  const [docus, setDocus] = useState([]);

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
        {docus.map((docu, index) => (
          <div className="col-md-6 p-4" data-aos="fade-left">
            <div className="card mb-3">
              <img src={docu.url} className="card-img-top text-dark" />
              <div className="card-body text-dark row">
                <div className="col-1">
                  <h2>{index + 1}</h2>
                </div>
                <div className="col-11">
                  <h4 className="card-title text-dark">{docu.title}</h4>
                  <p className="card-text text-dark">{docu.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetPosts;
