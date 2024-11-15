import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import BusTable from './components/BusTable'; 
import BusDetail from "./components/BusDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestión de Buses</h1>
        <BusDetail />

      </header>
      <BusTable /> 

    </div>
  );
}

export default App;