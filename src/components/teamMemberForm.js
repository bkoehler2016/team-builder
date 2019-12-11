import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const MemberForm = props => {
  const setTeam = props.setTeam;
  const [person, setPerson] = useState({ name: "", role: "", email: "" });

  const eventHandler = event => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    setTeam(team => [...team, person]);
    setPerson({ name: "", role: "", email: " " });
  };

  console.log(props);

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup row>
        <Label for="name" sm={2}>
          Name:
        </Label>
        <Col sm={10}>
          <Input
            required="true"
            type="name"
            name="name"
            placeholder="name"
            value={person.name}
            onChange={eventHandler}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="role" sm={2}>
          Role:{" "}
        </Label>
        <Col sm={10}>
          <Input
            required="true"
            type="text"
            name="role"
            placeholder="role"
            value={person.role}
            onChange={eventHandler}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" sm={2}>
          Email:{" "}
        </Label>
        <Col sm={10}>
          <Input
            required="true"
            type="email"
            name="email"
            placeholder="email"
            input={person.email}
            onChange={eventHandler}
          />
        </Col>
      </FormGroup>

      <Button type="submit">Add Team Member</Button>
    </Form>
  );
};

export default MemberForm;
