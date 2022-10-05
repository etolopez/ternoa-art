import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

export const app = firebase.initializeApp({
  projectId: "art-blog-70396",
  appId: "1:1049473290670:web:95b2c467cef451963c383f",
  databaseURL: "https://art-blog-70396-default-rtdb.firebaseio.com",
  storageBucket: "art-blog-70396.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyDQG3_cCmLgzrUs-SuBP7aHkVjDcoygzOQ",
  authDomain: "art-blog-70396.firebaseapp.com",
  messagingSenderId: "1049473290670",
});
