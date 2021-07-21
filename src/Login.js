import React from "react";
import "./login.scss";

function Login() {
  return (
    <div className="login">
      <div className="box">
          <h1>You need to LogIn first</h1>
        <div class="google-btn">
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
