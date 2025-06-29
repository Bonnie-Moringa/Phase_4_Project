import React, { useState } from "react";
import { createClient } from "../api";

function ClientForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    agent_id: "",
    property_id: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createClient(formData);
    alert("Client added!");
  };

  return (
    <div className="card">
      <h2>Add Client</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone_number" placeholder="Phone" onChange={handleChange} />
        <input name="agent_id" placeholder="Agent ID" onChange={handleChange} />
        <input name="property_id" placeholder="Property ID" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ClientForm;
