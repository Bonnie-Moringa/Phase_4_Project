import React from "react";
import PropertyForm from "../components/PropertyForm";
import PropertyList from "../components/PropertyList";

function Properties() {
  return (
    <div className="card">
      <h2>Manage Properties</h2>
      <PropertyForm />
      <PropertyList />
    </div>
  );
}

export default Properties;
