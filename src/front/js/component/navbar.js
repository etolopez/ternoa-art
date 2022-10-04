import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import soldb from "../../img/SolDb.png";

export const Navbar = () => {
  return (
    <nav className="navbar text-light">
      <div className="container">
        <div className="ml-auto">
          <Link to="/">
            <img src={soldb} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
