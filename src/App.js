import React, { useEffect, useMemo, useState } from "react";
import "./App.scss";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Message from "./components/Message";
import { auth } from "./components/firebase";
import createMessages from "./components/CreateChats";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [showMenu, setShowMenu] = useState(null);
  const [user, setUser] = useState(null);
  const [currentChat, setCurrentChat] = useState(null)

  const setCurrChat = (id) => {
    setCurrentChat(id);
  }

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(authUser);
      }
    });
  }, []);

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
          <Router>
          <Menu user={user} currentChat={currentChat} toggleMenu={toggleMenu} />

          
            <Switch>
              <Route exact path="/chat=:chatId">
                <Message setCurrChat={setCurrChat} user={user} toggleMenu={toggleMenu} />
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
