import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../component/header";
import InfoSection from "../component/infoSection";
import ParticlesBackground from "../component/ParticlesBackground";
import MakePost from "../component/MakePost";
import GetAllPosts from "../component/GetAllPosts";
import Login from "../component/login";
import Welcome from "../component/welcome";
import GetPosts from "../component/GetPosts";
import EditPost from "../component/EditPost.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../firebase/fb";

const auth = getAuth(app);

export const Home = () => {
  const [user, setUser] = useState(null);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [editPost, setEditPost] = useState(null);

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
            <section className="container my-4">
              <hr></hr>
              <Welcome user={user} />
              <h1 className="text-center my-4">
                Let's showcase some quality pieces to the World!
              </h1>
              <h3 className="m-auto py-4">
                Some things you could write about:
              </h3>
              <ul className="m-auto py-4">
                <li>
                  The artist. was he/she kind? Did he message you? Do you see a
                  cool trayectory for him/her?
                </li>
                <li>
                  The art. What you liked the most, is the style engaging? What
                  emotions are most present.
                </li>
                <li>The</li>
              </ul>
              <hr></hr>
            </section>
            <section>
              <MakePost user={user} />
            </section>
            <section>
              <EditPost
                user={user}
                isModalEdit={isModalEdit}
                setIsModalEdit={setIsModalEdit}
                editPost={editPost}
                setEditPost={setEditPost}
              />
              <GetAllPosts
                user={user}
                isModalEdit={isModalEdit}
                setIsModalEdit={setIsModalEdit}
                editPost={editPost}
                setEditPost={setEditPost}
              />
            </section>
          </div>
        ) : (
          <div>
            <section>
              <Login />
            </section>
            <section>
              <GetPosts />
            </section>
          </div>
        )}
      </div>
      <ParticlesBackground />
    </div>
  );
};
