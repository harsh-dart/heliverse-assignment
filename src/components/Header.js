import React from "react";
import "./Header.css";

const Header = ({ setShowTeam,showTeam }) => {
  return (
    <nav>
      <input type="text" placeholder="Search Name" />
      <button>Search</button>
      <button
        onClick={() => {
          setShowTeam(!showTeam);
        }}
      >
        {!showTeam? "Show My Team": "HomePage"}
      </button>
    </nav>
  );
};

export default Header;
