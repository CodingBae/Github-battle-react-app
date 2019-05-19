import React from "react";

const Languages = props => {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  return (
    <ul className="languages">
      {languages.map(lang => {
        return (
          <li
            key={lang}
            className={
              lang === props.selectedLanguage ? props.selectedLanguage : null
            }
            onClick={() => props.updateLanguage(lang)}
          >
            {lang}
          </li>
        );
      })}
    </ul>
  );
};

export default Languages;
