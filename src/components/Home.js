import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1>Welcome to Github Battle , battle your friends and more .......</h1>
        <Link className="button" to="/battle">
          Battle
        </Link>
      </div>
    );
  }
}

export default Home;
