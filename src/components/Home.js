import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import githubPic from "../github-home.jpeg";
class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome to Github Battle , battle your friends and more .......</h1>
        <img src={githubPic} alt="Battle Pic" className="Home-img" />
        <div className="Home-links">
          <Link className="Home-button" to="/battle">
            Battle
          </Link>
          <Link className="Home-button" to="/popular">
            Popular Repos
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
