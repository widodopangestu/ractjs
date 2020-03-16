import React from "react";
import ReactDOM from "react-dom";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import Contact from "./Contact";

const routing = (
  <Router>
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={{ color: "red" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact activeStyle={{ color: "green" }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact activeStyle={{ color: "magenta" }}>
            Contact
          </NavLink>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
