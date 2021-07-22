import React, { useEffect, useState } from "react";
import "./login.scss";
import { auth, db } from "./firebase";
import firebase from "firebase";
import createMessages from "./CreateChats";


function Login() {
  const handleLogin = (prov) => {
    var provider =
      prov === "google"
        ? new firebase.auth.GoogleAuthProvider()
        : new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // createMessages(result.user)
        console.log(result);
        db.collection("users")
          .doc(result.user.uid)
          .get()
          .then((docSnapshot) => {
            if (!docSnapshot.exists) {
              db.collection("users")
                .doc(result.user.uid)
                .set({
                  photoULR: result.user.photoURL,
                  name: result.user.displayName,
                  email: result.user.email,
                  chats: [],
                })
                .then(() => {
                  createMessages(result.user);
                  console.log("Document successfully written!");
                })
                .catch((error) => {
                  console.error("Error writing document: ", error);
                });
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };
  return (
    <div className="login">
      <div className="box">
        <h1>You need to LogIn first</h1>
        <div class="google-btn" onClick={() => handleLogin("google")}>
          <div class="google-icon-wrapper">
            <img
              class="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p class="btn-text">
            <b>Sign in with Google</b>
          </p>
        </div>
        <button onClick={() => handleLogin("facebook")} class="fb connect">
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
