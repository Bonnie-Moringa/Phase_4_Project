import React from "react";
import ClientForm from "../components/ClientForm";
import ClientList from "../components/ClientList";

function Clients() {
  return (
    <div className="card">
      <h2>Manage Clients</h2>
      <ClientForm />
      <ClientList />
    </div>
  );
}

export default Clients;
