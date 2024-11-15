import React, { useEffect, useState } from 'react';

const BusTable = () => {
  const [buses, setBuses] = useState([]); 
  const [error, setError] = useState(null); 

  
  const fetchBuses = async () => {
    try {
      const response = await fetch('http://localhost:8090/bus');
      if (!response.ok) {
        throw new Error('Error al obtener los datos de los buses');
      }
      const data = await response.json();
      setBuses(data); 
    } catch (error) {
      setError(error.message);
    }
  };

  
  useEffect(() => {
    fetchBuses();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Listado de Buses</h2>
      
      {error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Número de Bus</th>
              <th>Placa</th>
              <th>Fecha de Creación</th>
              <th>Características</th>
              <th>Marca</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {buses.length > 0 ? (
              buses.map((bus) => (
                <tr key={bus.id}>
                  <td>{bus.id}</td>
                  <td>{bus.numero_bus}</td>
                  <td>{bus.placa}</td>
                  

                  <td>
  {bus.fecha_creacion
    ? new Date(bus.fecha_creacion).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : "Fecha no disponible"}
</td>

                  
                  <td>{bus.caracteristicas}</td>
                  <td>{bus.marca.nombre}</td>
                  <td>{bus.estado}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">No hay datos de buses disponibles.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BusTable;
