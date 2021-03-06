import React from "react";
import queryString from "query-string";
import api from "../utils/api";
import { Link } from "react-router-dom";
import PlayerPreview from "./PlayerPreview";
import Loading from "./Loading";
import "./Results.css";

function Profile(props) {
  var info = props.info;
  return (
    <PlayerPreview avatar={info.avatar_url} username={info.login}>
      <ul className="space-list-items">
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers : {info.followers}</li>
        <li>Following : {info.following}</li>
        <li>Public Repos : {info.public_repos}</li>
        {info.blog && (
          <li>
            <a href={info.blog}>{info.blog}</a>
          </li>
        )}
      </ul>
    </PlayerPreview>
  );
}

function Player(props) {
  return (
    <div className="column">
      <h1 className="header">{props.label}</h1>
      <h3>Score:{props.score}</h3>
      <Profile info={props.profile} />
    </div>
  );
}

class Results extends React.Component {
  state = {
    winner: null,
    loser: null,
    error: null,
    loading: true
  };

  componentDidMount() {
    var players = queryString.parse(this.props.location.search);
    api.battle([players.playerOneName, players.playerTwoName]).then(results => {
      if (results === null) {
        return this.setState(() => {
          return {
            error:
              "Hey buddy there is some error, check for any typos and try again....",
            loading: false
          };
        });
      }
      this.setState(() => {
        return {
          error: null,
          winner: results[0],
          loser: results[1],
          loading: false
        };
      });
    });
  }
  render() {
    var error = this.state.error;
    var winner = this.state.winner;
    var loser = this.state.loser;
    var loading = this.state.loading;

    if (loading === true) {
      return <Loading />;
    }

    if (error) {
      return (
        <div>
          <h1>{error}</h1>
          <Link to="/battle">Try Again</Link>
        </div>
      );
    }

    return (
      <div className="row">
        <Player label="Winner" score={winner.score} profile={winner.profile} />
        <Player label="Loser" score={loser.score} profile={loser.profile} />
      </div>
    );
  }
}

export default Results;
