import { app } from "../firebase/fb";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";
const db = getFirestore(app);

export default function deletePost() {
  const collectionRef = collection(db, "archive");
  const docuRef = doc(collectionRef);
  deleteDoc(docuRef);
}
