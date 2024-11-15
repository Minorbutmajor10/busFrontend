import React, { useState } from "react";

function BusDetail() {
  const [bus, setBus] = useState(null); 
  const [busId, setBusId] = useState(""); 

 
  const fetchBusById = async () => {
    try {
      const response = await fetch(`http://localhost:8090/bus/${busId}`);
      if (!response.ok) {
        throw new Error("Error al obtener los datos del bus.");
      }
      const data = await response.json();
      setBus(data); 
      
      alert(
        `ID: ${data.id}\nNúmero de bus: ${data.numero_bus}\nPlaca: ${data.placa}\nFecha de Creación: ${data.fecha_creacion}\nCaracterísticas: ${data.caracteristicas}\nMarca: ${data.marca.nombre}\nEstado: ${data.estado}`
      );
    } catch (error) {
      console.error(error);
      alert("No se pudo obtener los datos del bus.");
    }
  };

  

  return (
    <div>
      <h3>Buscar Bus por ID</h3>
      <input
        type="text"
        placeholder="Ingresa el ID del bus"
        value={busId}
        onChange={(e) => setBusId(e.target.value)}
      />
      <button onClick={fetchBusById}>Buscar y Mostrar en Alert</button>
    </div>
  );
}

export default BusDetail;
