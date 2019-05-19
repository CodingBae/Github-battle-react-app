import React from "react";
import "./Popular.css";
import Languages from "./Languages";
import api from "../utils/api";
import ReposContainer from "./ReposContainer";

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: null
    };
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage = lang => {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      };
    });
    api.fetchPopularRepos(lang).then(repos => {
      this.setState(() => {
        return {
          repos: repos
        };
      });
    });
  };

  render() {
    return (
      <div>
        <Languages
          selectedLanguage={this.state.selectedLanguage}
          updateLanguage={this.updateLanguage}
        />
        {!this.state.repos ? (
          <p>Loading</p>
        ) : (
          <ReposContainer repos={this.state.repos} />
        )}
      </div>
    );
  }
}

export default Popular;
