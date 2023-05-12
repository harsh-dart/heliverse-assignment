import React from "react";
import "./Card.css";

const Card = ({
  full_name,
  addTeam,
  data,
  gender,
  availability,
  domain,
  email,
  avatar,
}) => {
  return (
    <div className="card">
      <div>
        <img src={avatar} alt="avatar" />
      </div>
      <div>Full Name : {full_name}</div>
      <div>E-mail : {email}</div>
      <div>Gender : {gender}</div>
      <div>Domain : {domain}</div>
      <div>Available : {availability ? "Yes" : "No"}</div>
      {availability && addTeam && <button onClick={() => addTeam(data)}>Add</button>}
    </div>
  );
};

export default Card;
