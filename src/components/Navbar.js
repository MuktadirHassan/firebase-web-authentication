import firebase from "firebase";
import "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userInfo } from "../App";

export default function Navbar() {
  const [user, setUser] = useContext(userInfo);
  const signOut = () => {
    console.log("sign me out");
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex items-center justify-center py-4 shadow">
      <Link to="/" className="px-4">
        Home
      </Link>
      {user.email ? (
        <button onClick={signOut} className="px-4">
          {" "}
          Logout{" "}
        </button>
      ) : (
        <>
          <Link to="/login" className="px-4">
            Login
          </Link>
          <Link to="/signup" className="px-4">
            Register
          </Link>
        </>
      )}

      <Link to="/profile" className="px-4">
        Profile
      </Link>
      <Link to="/admin" className="px-4">
        Admin
      </Link>
    </div>
  );
}
