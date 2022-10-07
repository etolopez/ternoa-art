import { app } from "../firebase/fb";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

export default function editPostFn(docu) {
  const db = getFirestore(app);
  const collectionRef = collection(db, "archive");

  const docuRef = doc(collectionRef, docu.nombre);
  setDoc(docuRef, docu);
}
