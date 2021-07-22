import React, { useState } from "react";
import { db } from "./firebase";
import firebase from "firebase";

function MessageSend({ user,chatId }) {
  const [message, setMessage] = useState("");
  const handleSend = () => {
    db.collection("chats")
      .doc(chatId)
      .collection("messages")
      .add({
        message: message,
        sender: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }).then(() => {
          setMessage("")
      });
  };
  return (
    <div className="input-group">
      <button className="icon" onClick={handleSend}>
        <img src="./imgs/paper-plane.svg" alt="send" />
      </button>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Type your message"
      />
    </div>
  );
}

export default MessageSend;
