import firebase from "firebase/app";
import "firebase/auth";
import React from "react";
import initializeFirebase from "./../lib/initializeFirebase";

export default function GoogleSignIn() {
  initializeFirebase();
  let provider = new firebase.auth.FacebookAuthProvider();

  const handleFacebookSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
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
        onClick={handleFacebookSignIn}
      >
        Facebook
      </button>
    </div>
  );
}
