import firebase from "firebase";
import "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import EmailSignUp from "./components/EmailSignUp";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import initializeFirebase from "./lib/initializeFirebase";
export const userInfo = createContext();

function App() {
  initializeFirebase();
  const [user, setUser] = useState({});
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userInfo.Provider value={[user, setUser]}>
      <div className="h-screen bg-gray-100">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <EmailSignUp></EmailSignUp>
            </Route>
            <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </userInfo.Provider>
  );
}

export default App;
