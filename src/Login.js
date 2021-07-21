import React, { useEffect, useState } from "react";
import "./login.scss";
import { auth } from "./firebase";
import firebase from "firebase";

function Login() {
  const handleGoogleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <div className="login">
      <div className="box">
        <h1>You need to LogIn first</h1>
        <div class="google-btn" onClick={handleGoogleLogin}>
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
        <button class="fb connect">Sign in with Facebook</button>
      </div>
    </div>
  );
}

export default Login;
