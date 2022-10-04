import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../component/header";
import InfoSection from "../component/infoSection";
import ParticlesBackground from "../component/ParticlesBackground";
import MakePost from "../component/MakePost";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="mt-5">
        <section>
          <Header />
        </section>
        <section>
          <h1 className="text-center" data-aos="fade-left">
            Featured Creators
          </h1>
        </section>
        <section data-aos="fade-bottom">
          <InfoSection />
        </section>
        <section data-aos="fade-right">
          <h1 className="text-center">Art</h1>
        </section>
        <section>
          <MakePost />
        </section>
      </div>
      <ParticlesBackground />
    </div>
  );
};
