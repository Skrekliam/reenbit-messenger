import React, { useMemo } from "react";
import convertTime from "./ConvertTime";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ChatItem({ chat,currentChat }) {
  // const date = new Date()
  const messageTime = convertTime(chat?.chat.lastUpdated);
  // let messageTime = date - time < 86400000  ? time.getHours() +':'+ ('0' + time.getMinutes()).substr(-2) +':' +('0' + time.getSeconds()).substr(-2) : time.getDate() + '/' + (time.getMonth() + 1) + '/' + (time.getYear() + 1900);
  // console.log(new Date())
  // console.log(chat)
  return (
    <Link to={`/chat=${chat?.id}`}>
      <div
        className={`chat ${
          chat?.id === currentChat ? "active" : ""
        }`}
      >
        <div className="messageSection">
          <img src="./imgs/avatar.png" alt="Avatar" className="avatarImg" />
          <div className="text">
            <p className="contact">{chat?.chat.user1}</p>
            <p className="message">
              {chat?.chat.lastMessage.length > 81
                ? chat?.chat.lastMessage.slice(0, 81) + "..."
                : chat?.chat.lastMessage}
            </p>
          </div>
        </div>
        <div className="time">{messageTime}</div>
      </div>
    </Link>
  );
}

export default ChatItem;
