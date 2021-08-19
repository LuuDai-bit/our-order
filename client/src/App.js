import React from "react";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./Components/Error/404";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Header from "./Components/Layout/Header";
import UserDetail from "./Pages/UserDetail";

function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Navbar></Navbar>
        <div id="content-wrapper" className="d-flex flex-column">
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/users/:id">
              <UserDetail />
            </Route>
            <Route exact path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
