import React, { useEffect, useMemo, useState } from "react";
import "./App.scss";
import Login from "./Login";
import Menu from "./Menu";
import Message from "./Message";
import { auth } from "./firebase";
import createMessages from "./CreateChats";

function App() {
  const [showMenu, setShowMenu] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      console.log(authUser)
      setUser(authUser);
    } else{
      setUser(authUser)
    }
  });
},[])

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
        <button onClick={() => createMessages(user)}></button>
          <Menu user={user} toggleMenu={toggleMenu} />

          <Message user={user} toggleMenu={toggleMenu} />
        </>
      )}
    </div>
  );
}

export default App;
