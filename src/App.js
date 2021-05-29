import "firebase/auth";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import EmailSignUp from "./components/EmailSignUp";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
export const userInfo = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <userInfo.Provider value={[user, setUser]}>
      <div className="h-screen pt-8 bg-gray-100">
        <Router>
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
