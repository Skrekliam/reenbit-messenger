import React from "react";
import "./message.scss";

function Message() {
  return (
    <div className="messageBlock">
      {/* chat avatar + name */}
      <div className="message__header">
          <img src="./imgs/avatar.png" alt="Avatar" className="avatarImg" /> <p>Josefina</p>
      </div>
      <div className="message__text"></div>
      <div className="message__send"></div>
      {/* message */}
    </div>
  );
}

export default Message;
