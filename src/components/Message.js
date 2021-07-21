import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import "./message.scss";
import MessageItem from "./MessageItem";

function Message({ toggleMenu, user }) {
  const [messages, setMessages] = useState([]);
  let { chatId } = useParams();
  console.log(chatId)

  useEffect(() => {
    db.collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("timestamp","asc")
      .get()
      .then((res) => setMessages(res.docs.map((el) => el.data())));
  }, [chatId]);
  console.log(messages);

  return (
    <div className="messageBlock" onClick={() => toggleMenu("page")}>
      {/* chat avatar + name */}
      <div className="message__header">
        <img
          src="./imgs/menu.svg"
          onClick={() => toggleMenu("btn")}
          alt="Back"
          className="back"
        />
        <img src="./imgs/avatar.png" alt="Avatar" className="avatarImg" />{" "}
        <p>Josefina</p>
      </div>
      <div className="message__text">
        {messages?.map((message) => (
          <MessageItem message={message} user={user}/>
        ))}
      </div>
      <div className="message__send">
        <div className="input-group">
          <button className="icon">
            <img src="./imgs/paper-plane.svg" alt="send" />
          </button>
          <input type="text" placeholder="Type your message" />
        </div>
      </div>
    </div>
  );
}

export default Message;
