import React, { useState } from "react";

const MemberForm = props => {
  const setTeam = props.setTeam;
  const [person, setPerson] = useState({ name: "", role: "", email: "" });

  const eventHandler = event => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    setTeam(team => [...team, person]);
    setPerson({ name: "", role: "", email: "" });
  };

  console.log(props);

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name:</label>
      <input
        type="name"
        name="name"
        placeholder="name"
        value={person.name}
        onChange={eventHandler}
      />
      <label htmlFor="role">Role: </label>
      <input
        type="text"
        name="role"
        placeholder="role"
        value={person.role}
        onChange={eventHandler}
      />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        placeholder="email"
        input={person.email}
        onChange={eventHandler}
      />
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default MemberForm;
