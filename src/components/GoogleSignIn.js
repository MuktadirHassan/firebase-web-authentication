import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { userInfo } from "../App";
import initializeFirebase from "./../lib/initializeFirebase";

export default function GoogleSignIn() {
  const [user, setUser] = useContext(userInfo);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  initializeFirebase();
  let provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  return (
    <div className="mx-auto my-8 ">
      <button
        className="p-2 text-white bg-gray-800 rounded focus:outline-none focus:ring focus:ring-gray-300"
        onClick={handleGoogleSignIn}
      >
        Google
      </button>
    </div>
  );
}
