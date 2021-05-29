import React, { useContext } from "react";
import { userInfo } from "../App";

export default function Profile() {
  const [user, setUser] = useContext(userInfo);
  console.log(user);
  return (
    <div className="max-w-lg p-5 mx-auto bg-white">
      <img src={user.photoURL} alt="" className="mx-auto my-8 rounded-full" />

      <h1 className="text-lg">Name: {user.displayName}</h1>
      <h1 className="text-lg">Email: {user.email}</h1>
    </div>
  );
}
