import React from "react";
import Aos from "aos";
import himage2 from "../../img/c2.jpg";
import himage3 from "../../img/c3.jpg";

const style1 = {
  height: "12rem",
  objectFit: "cover",
};

const InfoSection = () => {
  return (
    <div name="info" className="container">
      <div className="row text-center" data-aos="fade-right">
        <div className="col-md-6">
          <div className="card featured mb-3">
            <div className="row ">
              <div className="col-md-5 m-0 p-1">
                <img src={himage2} className="img-fluid rounded" alt="..." />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title text-black">@OxEto</h5>
                  <p className="card-text text-black">
                    Recognized Crypto ilustrator, Fullstack-Web Developer,
                    collector, and all-time amazing person.
                  </p>
                  <a
                    href="https://twitter.com/notifications"
                    className="card-link"
                  >
                    <small>Go to his LinkedIn Doxx</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col col-md-6">
          <div
            href="https://twitter.com/etohacearte"
            className="card featured mb-3"
          >
            <div className="row">
              <div className="col-md-5 m-0 p-1">
                <img src={himage3} className="img-fluid rounded" alt="..." />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title text-black">@etohacearte</h5>
                  <p className="card-text text-black">
                    Artist, most recognized by his amazing talent at learning
                    things faster than a Solana transaction.
                  </p>
                  <p className="text-black">
                    <a
                      href="https://twitter.com/notifications"
                      className="card-link"
                    >
                      <small>Go to his Twitter -</small>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
