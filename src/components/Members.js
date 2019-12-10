import React from "react";

const Members = props => {
  return (
    <div className="member-list">
      <div className="member" key={Members.id}>
        <h2>{member.name}</h2>
        <h3>{member.role}</h3>
        <h4>{member.email}</h4>
      </div>
    </div>
  );
};

export default Members;
