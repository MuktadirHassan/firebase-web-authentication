import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import EmailSignUp from "./components/EmailSignUp";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

function App() {
  return (
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
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
