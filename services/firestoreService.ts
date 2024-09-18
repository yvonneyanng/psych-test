import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function addSubscriber(name: string, email: string) {
  try {
    const emailListRef = doc(db, "Subscription", "emailList");
    await updateDoc(emailListRef, {
      subscribers: arrayUnion({ name: name, email: email }),
    });
  } catch (error) {
    console.error(error);
  }
}
