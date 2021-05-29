import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { userInfo } from "../App";

export default function PrivateRoute({ rest, children }) {
  const [user, setUser] = useContext(userInfo);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
