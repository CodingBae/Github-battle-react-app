import React from "react";
import "./ReposContainer.css";

const ReposContainer = props => {
  return (
    <ul className="popular-list">
      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className="popular-item">
            <div className="popular-pos">#{index + 1}</div>
            <ul className="space-liste-item">
              <li className="avatar">
                <img src={repo.owner.avatar_url} alt="awesome repo" />
              </li>
              <li>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default ReposContainer;
