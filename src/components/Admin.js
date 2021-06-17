import React, { useContext, useEffect, useState } from "react";
import { userInfo } from "../App";
export default function Admin() {
  const [isAdmin, setIsAdmin] = useState({ isAdmin: false });
  // user --> { isAdmin : false }
  const [user, setUser] = useContext(userInfo);
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:8000/isAdmin/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setIsAdmin(data))
      .catch((err) => console.log(err));

    console.log(isAdmin);
  }, []);
  return (
    <div className="container mx-auto mt-8">
      {isAdmin.isAdmin ? (
        <p>You are an admin</p>
      ) : (
        <p>You are not an admin. {isAdmin?.message}</p>
      )}
    </div>
  );
}
