import React from "react";

function NoChat({toggleMenu}) {
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
      </div>
      <h1 className="noChat">Select chat to start</h1>
    </div>
  );
}

export default NoChat;
