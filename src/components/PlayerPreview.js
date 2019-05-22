import React from "react";
import "./PlayerPreview.css";
function PlayerPreview(props) {
  return (
    <div>
      <div className="column">
        <img src={props.avatar} alt={"Avatar for " + props.username} />
        <h2 className="username">@{props.username}</h2>
      </div>
      {props.children}
    </div>
  );
}
export default PlayerPreview;
