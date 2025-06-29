import React from 'react';
import AgentForm from './components/AgentForm';
import AgentList from './components/AgentList';
import PropertyForm from './components/PropertyForm';
import PropertyList from './components/PropertyList';
import ClientForm from './components/ClientForm';
import ClientList from './components/ClientList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Real Estate Management</h1>
      </header>
      <main className="main-content">
        <section>
          <h2>Agents</h2>
          <AgentForm />
          <AgentList />
        </section>
        <section>
          <h2>Properties</h2>
          <PropertyForm />
          <PropertyList />
        </section>
        <section>
          <h2>Clients</h2>
          <ClientForm />
          <ClientList />
        </section>
      </main>
    </div>
  );
}

export default App;
