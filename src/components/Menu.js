import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import { auth, db } from "./firebase";
import "./menu.scss";
import SearchInput from "./SearchInput";

function Menu({
  removeNewMesages,
  unreadMessages,
  addNewMessages,
  toggleMenu,
  user,
  currentChat,
}) {
  const [chats, setChats] = useState([]);
  const [chatsList, setChatsList] = useState([]);
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    console.log(unreadMessages);
    // [...unreadMessages].map(chatId =>
    // document.querySelector(`#${chatId}`).classList.add('newMessage')
    // )
    document.title =
      [...unreadMessages].length !== 0
        ? `${[...unreadMessages].length} new messages`
        : `Reenbit messenger`;
  }, [unreadMessages]);

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
  console.log(chats);

  const setActiveChats = (els) =>{
    if(!els){ setRefresh(prev => !prev); return; };
    setChats([])
    console.log(els)
    setChats(els)
  }


  useEffect(() => {
    if (!chatsList) return;
    db.collection("chats")
      .orderBy("lastUpdated", "desc")
      .onSnapshot((snapshot) => {
        setActiveChats(
          snapshot.docs.map((doc) => {
            if (chatsList.includes(doc.id)) {
              return {
                id: doc.id,
                chat: doc.data(),
              };
            }
          })
        );
      });
  }, [chatsList, refresh]);

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
          <SearchInput setActiveChats={setActiveChats} chatsList={chatsList}/>
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
        {chats.map((el) => (
          <ChatItem
            unreadMessages={unreadMessages}
            key={el?.id}
            currentChat={currentChat}
            user={user}
            chat={el}
          />
        ))}
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
