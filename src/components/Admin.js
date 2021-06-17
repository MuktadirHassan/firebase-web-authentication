import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
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
      <Link to="/admin/dashboard" className="px-4">
        Dashboard
      </Link>
      <Link to="/admin/graphs" className="px-4">
        Graphs
      </Link>
      <Switch>
        <Route path="/admin/dashboard">
          <p>Hi, I'm dashboard.</p>
        </Route>
        <Route path="/admin/graphs">
          <p>Hi, I'm graphs.</p>
        </Route>
      </Switch>

      {isAdmin.isAdmin ? (
        <p>You are an admin</p>
      ) : (
        <p>You are not an admin. {isAdmin?.message}</p>
      )}
    </div>
  );
}
