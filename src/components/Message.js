import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import "./message.scss";
import MessageItem from "./MessageItem";
import MessageSend from "./MessageSend";

function Message({ toggleMenu, user, setCurrChat }) {
  const [messages, setMessages] = useState([]);
  const [recepient, setRecepient] = useState("");
  let { chatId } = useParams();
  console.log(chatId);
  setCurrChat(chatId);

  useEffect(() => {
    db.collection("chats")
      .doc(chatId)
      .get()
      .then((doc) => {
        let { user1, user2 } = doc.data();
        setRecepient(user.displayName !== user1 ? user1 : user2);
      });
  }, [chatId]);
  
  useEffect(() => {
    if(!messages) return
    let scrollItems = document.getElementsByClassName("messageItem");
    scrollItems[scrollItems.length - 1]?.scrollIntoView({block: "center", behavior: "smooth"});
  },[messages])

  useEffect(() => {
    db.collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((el) => el.data()));
      });
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
        <p>{recepient}</p>
      </div>
      <div className="message__text">
        {messages?.map((message) => (
          <MessageItem message={message} user={user} />
        ))}
      </div>
      <div className="message__send">
        <MessageSend recepient={recepient} user={user} chatId={chatId} />
      </div>
    </div>
  );
}

export default Message;
