import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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
      <Label htmlFor="name">Name:</Label>
      <input
        type="name"
        name="name"
        placeholder="name"
        value={person.name}
        onChange={eventHandler}
      />
      <Label htmlFor="role">Role: </Label>
      <input
        type="text"
        name="role"
        placeholder="role"
        value={person.role}
        onChange={eventHandler}
      />

      <Label htmlFor="email">Email: </Label>
      <input
        type="email"
        name="email"
        placeholder="email"
        input={person.email}
        onChange={eventHandler}
      />
      <Button type="submit">Add Team Member</Button>
    </form>
  );
};

export default MemberForm;
