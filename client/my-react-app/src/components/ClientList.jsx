import React, { useEffect, useState } from "react";
import { fetchClients } from "../api";

function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients().then((res) => setClients(res.data));
  }, []);

  return (
    <div className="card">
      <h2>Clients</h2>
      <ul>
        {clients.map((c) => (
          <li key={c.id}>
            {c.name} ({c.email}) - {c.property_name}, Agent: {c.agent_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientList;
