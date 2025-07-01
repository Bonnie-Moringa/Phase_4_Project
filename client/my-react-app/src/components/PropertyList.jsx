import React, { useEffect, useState } from "react";
import { fetchProperties } from "../api";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties().then((res) => setProperties(res.data));
  }, []);

  return (
    <div className="card">
      <h3>Property List</h3>
      <ul>
        {properties.map((p) => (
          <li key={p.id}>
            {p.name} - {p.status} (Agent ID: {p.agent_id})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;
