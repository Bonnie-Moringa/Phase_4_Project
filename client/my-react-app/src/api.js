import axios from "axios";

const API_BASE = "https://real-estate-api.onrender.com";


// -------- Agents --------
export const fetchAgents = () => 
  axios.get(`${API_BASE}/agents`).catch(err => {
    console.error("Error fetching agents:", err);
    throw err;
  });

export const createAgent = (data) => 
  axios.post(`${API_BASE}/agents`, data).catch(err => {
    console.error("Error creating agent:", err.response?.data || err.message);
    throw err;
  });

export const deleteAgent = (id) => 
  axios.delete(`${API_BASE}/agents/${id}`).catch(err => {
    console.error("Error deleting agent:", err.response?.data || err.message);
    throw err;
  });

// -------- Properties --------
export const fetchProperties = () => 
  axios.get(`${API_BASE}/properties`).catch(err => {
    console.error("Error fetching properties:", err);
    throw err;
  });

export const createProperty = (data) => 
  axios.post(`${API_BASE}/properties`, data).catch(err => {
    console.error("Error creating property:", err.response?.data || err.message);
    throw err;
  });

// -------- Clients --------
export const fetchClients = () => 
  axios.get(`${API_BASE}/clients`).catch(err => {
    console.error("Error fetching clients:", err);
    throw err;
  });

export const createClient = (data) => 
  axios.post(`${API_BASE}/clients`, data).catch(err => {
    console.error("Error creating client:", err.response?.data || err.message);
    throw err;
  });
