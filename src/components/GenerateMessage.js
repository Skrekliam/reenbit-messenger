import { db } from "./firebase";
import firebase from "firebase";

export default async function generateMessage(chatId, sender, addNewMessages) {
  const url = "https://api.chucknorris.io/jokes/random";
  let message = await fetch(url)
    .then((res) => res.json())
    .then((res) => res.value)
    .catch((err) => alert(err));
  //   alert(message);
  setTimeout(
    () => {
      db.collection("chats")
        .doc(chatId)
        .update({
          lastMessage: message,
          lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
          lastSender: sender,
        })
        .then(() =>
          db
            .collection("chats")
            .doc(chatId)
            .collection("messages")
            .add({
              message: message,
              sender: sender,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
              addNewMessages(chatId);
              var audio = new Audio("./sounds/notification_sound.mp3");
              audio.play();
              audio = null;
            })
        );
    },
    Math.random() * 1000 * 5
    //   1000
  );
}
