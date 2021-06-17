import React, { useContext } from "react";
import { userInfo } from "../App";

export default function Profile() {
  const [user, setUser] = useContext(userInfo);
  console.log(user);
  return (
    <div className="max-w-lg p-5 mx-auto mt-8 bg-white">
      <img src={user.photoURL} alt="" className="mx-auto my-8 rounded-full" />

      <h1 className="text-gray-500 text-md">Name: {user.displayName}</h1>
      <h1 className="text-gray-500 text-md">Email: {user.email}</h1>
      <h1 className="text-gray-500 text-md">
        Last SignIn: {user.metadata.lastSignInTime}
      </h1>
    </div>
  );
}
