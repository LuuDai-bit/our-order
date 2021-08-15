import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./Components/Error/404";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Header from "./Components/Layout/Header";

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
              <User />
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
