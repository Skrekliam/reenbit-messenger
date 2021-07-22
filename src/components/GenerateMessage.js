import { db } from "./firebase";
import firebase from "firebase";

export default async function generateMessage(chatId, sender) {
  const url = "https://api.chucknorris.io/jokes/random";
  let message = await fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((res) => res.value)
    .catch((err) => alert(err));
  //   alert(message);
  setTimeout(() => {
    db.collection("chats")
      .doc(chatId)
      .update({
        lastMessage: message,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
        lastSender: sender,
      })
      .then(() =>
        db.collection("chats").doc(chatId).collection("messages").add({
          message: message,
          sender: sender,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
      );
  }, 10000 + Math.random() * 1000 * 5);
}
