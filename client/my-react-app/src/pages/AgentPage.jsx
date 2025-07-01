import React from "react";
import AgentForm from "../components/AgentForm";
import AgentList from "../components/AgentList";

function Agents() {
  return (
    <div className="card">
      <h2>Manage Agents</h2>
      <AgentForm />
      <AgentList />
    </div>
  );
}

export default Agents;
