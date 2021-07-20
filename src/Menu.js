import React from "react";
import "./menu.scss";

function Menu() {
  return (
    <div>
      <div className="head">
        <div className="avatar">
          <img src="./imgs/avatar.png" alt="Avatar" className="head__avatarImg"/>
        </div>
        <div className="search">
          <input type="text" placeholder="🔍 Search or start new chat" />
        </div>
      </div>

      <div className="chats">
        <div className="chat"></div>
        <div className="chat"></div>
        <div className="chat"></div>
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
