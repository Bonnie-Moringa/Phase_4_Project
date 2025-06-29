import React, { useEffect, useState } from "react";
import { fetchAgents, deleteAgent } from "../api";
import "./../styles/App.css";

function AgentList() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetchAgents().then((res) => setAgents(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteAgent(id);
    setAgents(agents.filter((a) => a.id !== id));
  };

  return (
    <div className="card">
      <h2>Agents</h2>
      <ul>
        {agents.map((a) => (
          <li key={a.id}>
            {a.name} ({a.email}) - {a.phone}
            <button onClick={() => handleDelete(a.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgentList;
