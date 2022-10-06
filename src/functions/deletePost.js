import { app } from "../firebase/fb";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";
const db = getFirestore(app);

export default async function deletePost(docu) {
  const collectionRef = collection(db, "archive");
  const docuRef = doc(collectionRef, docu.nombre);
  const deleted = await deleteDoc(docuRef);
  alert("File Deleted Successfully");
  return deleted;
}
