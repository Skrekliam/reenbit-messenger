import React, { useEffect, useMemo, useState } from "react";
import "./App.scss";
import Login from "./Login";
import Menu from "./Menu";
import Message from "./Message";
import { auth } from "./firebase.js";

function App() {
  const [showMenu, setShowMenu] = useState(null);
  const [user, setUser] = useState(null);
  auth.onAuthStateChanged((curr) => {
    if (curr) {
      setUser(curr);
    }
  });

  console.log(user);
  const toggleMenu = (caller) => {
    let action;
    let menu = document.getElementsByClassName("menu")[0];
    let msgBlock = document.getElementsByClassName("messageBlock")[0];
    if (showMenu === "show") {
      action = "hide";
      msgBlock.style.filter = "opacity(100%)";
      menu.classList.remove("showMenu");
      menu.classList.add("hideMenu");
    } else {
      if (caller === "page") return;
      action = "show";
      msgBlock.style.filter = "opacity(50%)";
      menu.style.filter = "opacity(100%)";
      menu.classList.remove("hideMenu");
      menu.classList.add("showMenu");
    }
    setShowMenu(action);
  };

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Menu user={user} toggleMenu={toggleMenu} />

          <Message user={user} toggleMenu={toggleMenu} />
        </>
      )}
    </div>
  );
}

export default App;
