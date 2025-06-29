import React from "react";
import AgentList from "./components/AgentList";
import AgentForm from "./components/AgentForm";
import PropertyList from "./components/PropertyList";
import PropertyForm from "./components/PropertyForm";
import ClientList from "./components/ClientList";
import ClientForm from "./components/ClientForm";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <h1>🏠 Real Estate Dashboard</h1>
      <div className="grid">
        <AgentForm />
        <AgentList />
        <PropertyForm />
        <PropertyList />
        <ClientForm />
        <ClientList />
      </div>
    </div>
  );
}

export default App;
