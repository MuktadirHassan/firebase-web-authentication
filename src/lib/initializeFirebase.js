import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./../components/firebaseConfig";

const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
};

export default initializeFirebase;
