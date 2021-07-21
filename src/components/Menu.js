import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import { auth, db } from "./firebase";
import "./menu.scss";

function Menu({ toggleMenu, user, currentChat }) {
  const [chats, setChats] = useState([]);
  const [chatsList, setChatsList] = useState([]);

  useEffect(() => {
    if (!user) return;
    console.log(user.uid);
    db.collection("users")
      .doc(user.uid)
      // .orderBy("lastUpdated", "desc")
      .get()
      .then((doc) => {
        setChatsList(doc.data().chats);
      });
  }, []);
  console.log(chatsList);
console.log(chats)
  useEffect(() => {
    if (!chatsList) return;
    db.collection("chats")
      .orderBy("lastUpdated", "desc")
      .onSnapshot((snapshot) => {
        setChats(
          snapshot.docs.map((doc) => {
            if (chatsList.includes(doc.id)){
              
              return {
                id: doc.id,
                chat: doc.data(),
              };}
          })
        );
      });
  }, [chatsList]);

  return (
    <div className="menu">
      <div className="head">
        <button className="back" onClick={() => toggleMenu("btn")}>
          <img src="./imgs/close.svg" alt="close" />
        </button>
        <div className="avatar">
          <div className="content">
            <img
              src={user.photoURL ?? `./imgs/avatar.png`}
              alt={user.displayName}
              className="avatarImg"
            />
            <span>{user.displayName}</span>
          </div>
          <span className="logout">
            <img
              onClick={() => auth.signOut()}
              src="./imgs/logout.svg"
              alt="logout"
            />
          </span>
        </div>
        <div className="search">
          <div className="input-group">
            <span className="icon">🔍 </span>
            <input type="text" placeholder="Search or start new chat" />
          </div>
        </div>
      </div>

      <div className="chats">
        <h1 className="chatsHeader">Chats</h1>
        {/* <div className="chat">
          <div className="messageSection">
            <img src="./imgs/avatar.png" alt="Avatar" className="avatarImg" />
            <div className="text">
              <p className="contact">Alice Freeman</p>
              <p className="message">You are the worst!</p>
            </div>
          </div>
          <div className="time">Jun 12, 2017</div>
        </div> */}
    {chats.map(el => 
        <ChatItem currentChat={currentChat} chat={el} />
        )}
      </div>
      {/* left side */}
      {/* avatar */}
      {/* search chat */}

      {/* chats */}
      {/* chat item */}
    </div>
  );
}

export default Menu;
