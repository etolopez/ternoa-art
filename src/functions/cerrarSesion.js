import { app } from "../firebase/fb";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(app);

function cerrarSesion() {
  signOut(auth);
}

export default cerrarSesion;
