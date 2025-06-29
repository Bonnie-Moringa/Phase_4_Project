import React, { useState } from "react";
import { createAgent } from "../api";

function AgentForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    phone_number: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAgent(formData);
    alert("Agent added!");
  };

  return (
    <div className="card">
      <h2>Add Agent</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="number" placeholder="Number" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone_number" placeholder="Phone" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AgentForm;
