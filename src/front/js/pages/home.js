import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../component/header";
import InfoSection from "../component/infoSection";
import ParticlesBackground from "../component/ParticlesBackground";
import MakePost from "../component/MakePost";
import GetAllPosts from "../component/GetAllPosts";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../firebase/fb";
import Login from "../component/login";
import Welcome from "../component/welcome";

const auth = getAuth(app);

export const Home = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  });

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
        {user ? (
          <div>
            <section data-aos="fade-right">
              <Welcome user={user} />
              <h1 className="text-center">Art</h1>
            </section>
            <section>
              <MakePost />
            </section>
          </div>
        ) : (
          <div>
            <Login />
          </div>
        )}
        <section>
          <GetAllPosts user={user} />
        </section>
      </div>
      <ParticlesBackground />
    </div>
  );
};
