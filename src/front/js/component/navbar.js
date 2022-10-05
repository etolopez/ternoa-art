import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import soldb from "../../img/SolDb.png";
import cerrarSesion from "../../../functions/cerrarSesion";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../firebase/fb";

const auth = getAuth(app);

export const Navbar = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  });

  return (
    <nav className="navbar text-light">
      <div className="container">
        <div className="col-md-6 float-left">
          <Link to="/">
            <img src={soldb} />
          </Link>
        </div>
        {user ? (
          <div className="col-md-6 m-auto">
            <button
              className="btn btn-danger btn-lg float-end"
              onClick={cerrarSesion}
            >
              Sign Out
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
