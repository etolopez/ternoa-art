import React from "react";
import himage from "../../img/header_image.jpg";
import Aos from "aos";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const styleimage = {
    objectFit: "cover",
    maxWidth: "24.5rem",
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div
          className="col-md-6 align-self-center text-center my-4 "
          data-aos="fade-right"
        >
          <h1>The #1 Solana Art Blog</h1>
          <h2>Open Source Showcase</h2>
          <button className="btn-lg btn-success mt-2 rounded-pill">
            <Link to="login" smooth={true} offset={-100} duration={200}>
              Go to art
            </Link>
          </button>
        </div>
        <div
          className="col-sm-1 col-md-6 my-4 headerImage"
          data-aos="fade-left"
        >
          <div className="card rounded">
            <img src={himage} style={styleimage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
