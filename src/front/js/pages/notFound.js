import React from "react";
import nope from "../../img/nope.png";
import ParticlesBackground from "../component/ParticlesBackground";

export const NotFound = () => {
  const style = {
    width: "30rem",
  };

  return (
    <div className="container text-center">
      <ParticlesBackground />
      <img src={nope} style={style} />
    </div>
  );
};
