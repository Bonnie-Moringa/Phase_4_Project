import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🏠 Real Estate Manager</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/agents">Agents</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/clients">Clients</Link>
      </div>
    </nav>
  );
}

export default Navbar;
