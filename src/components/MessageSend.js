import React, { useState } from "react";
import { db } from "./firebase";
import firebase from "firebase";
import generateMessage from "./GenerateMessage";

function MessageSend({ recepient, user, chatId, addNewMessages }) {
  const [message, setMessage] = useState("");
  const handleSend = (e) => {
    e.preventDefault();
    db.collection("chats")
      .doc(chatId)
      .update({
        lastMessage: message,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
        lastSender: user.displayName,
      })
      .then(() =>
        db.collection("chats").doc(chatId).collection("messages").add({
          message: message,
          sender: user.displayName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
      )
      .then(() => {
        setMessage("");
        generateMessage(chatId, recepient, addNewMessages);
      });
  };
  return (
    <div className="input-group">
      <form onSubmit={handleSend}>
        <button className="icon" onClick={handleSend}>
          <img src="./imgs/paper-plane.svg" alt="send" />
        </button>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Type your message"
        />
      </form>
    </div>
  );
}

export default MessageSend;
