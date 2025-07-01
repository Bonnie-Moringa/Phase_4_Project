import React, { useState } from "react";
import { createProperty } from "../api";

function PropertyForm() {
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    agent_id: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProperty(formData);
    alert("Property added!");
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>Add New Property (Project)</h3>
      <input
        name="name"
        placeholder="Property Name (e.g. Residential Plot A)"
        onChange={handleChange}
        value={formData.name}
        required
      />
      <input
        name="status"
        placeholder="Status (Available/Sold)"
        onChange={handleChange}
        value={formData.status}
        required
      />
      <input
        name="agent_id"
        placeholder="Agent ID"
        onChange={handleChange}
        value={formData.agent_id}
        required
      />
      <button type="submit">Add Property</button>
    </form>
  );
}

export default PropertyForm;
