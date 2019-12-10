import React, { useState } from "react";
import Members from "./components/Members";
import MemberForm from "./components/teamMemberForm";
import "./App.css";

function App() {
  const [team, setTeam] = useState([
    { name: "Ben", role: "Student", email: "ben@lambda.com" },
    { name: "Adam", role: "Dog", email: "adam@lambda.com" },
  ]);
  return (
    <div className="App">
      <h1>Team Builder Form</h1>
      <MemberForm setTeam={setTeam} />
      {team.map(person => (
        <Members key={person.name} person={person} />
      ))}
    </div>
  );
}
export default App;
