import React, { useEffect, useState } from "react";
import { fetchProperties } from "../api";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties().then((res) => setProperties(res.data));
  }, []);

  return (
    <div className="card">
      <h2>Properties</h2>
      <ul>
        {properties.map((p) => (
          <li key={p.id}>
            {p.name} - {p.status} (Agent: {p.agent_name})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;
