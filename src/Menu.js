import React from "react";
import { auth } from "./firebase";
import "./menu.scss";

function Menu({toggleMenu,user}) {
  return (
    <div className="menu">
      <div className="head">
        <button className="back" onClick={() => toggleMenu("btn")}>
          <img src="./imgs/close.svg" alt="close"  />
        </button>
        <div className="avatar">
          <div className="content">
          <img src={user.photoURL ?? `./imgs/avatar.png`} alt={user.displayName} className="avatarImg" /><span>{user.displayName}</span>
          </div>
          <span className="logout" ><img onClick={() => auth.signOut()} src="./imgs/logout.svg" alt="logout" /></span>
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
        <div className="chat">
          <div className="messageSection">
            <img src="./imgs/avatar.png" alt="Avatar" className="avatarImg" />
            <div className="text">
              <p className="contact">Alice Freeman</p>
              <p className="message">You are the worst!</p>
            </div>
          </div>
          <div className="time">Jun 12, 2017</div>
        </div>

        <div className="chat">
          <div className="messageSection">
            <img src="./imgs/avatar.png" alt="Avatar" className="avatarImg" />
            <div className="text">
              <p className="contact">Josefina</p>
              <p className="message">We are losing money! Quick!</p>
            </div>
          </div>
          <div className="time">Feb 18, 2017</div>
        </div>
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
