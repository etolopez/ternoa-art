import { app } from "../firebase/fb";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

async function loginEmailPassword(email, password) {
  signInWithEmailAndPassword(auth, email, password);
}

export default loginEmailPassword;
