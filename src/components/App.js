import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Popular from "./Popular";
import Home from "./Home";
import Nav from "./Nav";
import Battle from "./Battle";
import "./App.css";

var Router = BrowserRouter;
function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/battle" component={Battle} />
        <Route exact path="/popular" component={Popular} />
      </div>
    </Router>
  );
}

export default App;
