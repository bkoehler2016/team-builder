import React, { useState } from "react";

const teamMemberForm = ({ addNewTeamMember }) => {
  const [member, setMember] = useState({
    id: "",
    name: "",
    role: "",
    email: "",
  });

  const handleChanges = event => {
    console.log("event", event.target.value);
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    addNewTeamMember(member);

    setMember({ name: "", role: "", email: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        required="true"
        id="name"
        type="text"
        name="name"
        placeholder="Enter your Name"
        onChange={handleChanges}
        value={member.name}
      />
      <label htmlFor="role">Role</label>
      <input
        required="true"
        id="role"
        type="text"
        name="role"
        placeholder="Enter your Role"
        onChange={handleChanges}
        value={member.role}
      />
      <label htmlFor="email">Email</label>
      <input
        required="true"
        id="email"
        type="email"
        name="email"
        placeholder="Enter your Email"
        onChange={handleChanges}
        value={member.email}
      />
    </form>
  );
};

export default teamMemberForm;
