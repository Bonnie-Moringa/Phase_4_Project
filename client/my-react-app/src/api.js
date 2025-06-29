// api.js
import axios from "axios";

const API_BASE = "http://localhost:5000";

// -------- Agents --------
export const fetchAgents = async () => {
  try {
    return await axios.get(`${API_BASE}/agents`);
  } catch (err) {
    console.error("Error fetching agents:", err);
  }
};

export const createAgent = async (data) => {
  try {
    return await axios.post(`${API_BASE}/agents`, data);
  } catch (err) {
    console.error("Error creating agent:", err.response?.data || err.message);
  }
};

export const deleteAgent = async (id) => {
  try {
    return await axios.delete(`${API_BASE}/agents/${id}`);
  } catch (err) {
    console.error("Error deleting agent:", err.response?.data || err.message);
  }
};

// -------- Properties --------
export const fetchProperties = () => axios.get(`${API_BASE}/properties`);
export const createProperty = (data) => axios.post(`${API_BASE}/properties`, data);

// -------- Clients --------
export const fetchClients = () => axios.get(`${API_BASE}/clients`);
export const createClient = (data) => axios.post(`${API_BASE}/clients`, data);
