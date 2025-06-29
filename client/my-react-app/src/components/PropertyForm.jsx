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
    <div className="card">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="status" placeholder="Status" onChange={handleChange} />
        <input name="agent_id" placeholder="Agent ID" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default PropertyForm;
