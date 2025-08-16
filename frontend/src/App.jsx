// Archivo: frontend/src/App.jsx

import { useState } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [capacidad, setCapacidad] = useState('');
  const [proyectos, setProyectos] = useState([{ id: 1, nombre: '', costo: '', ganancia: '' }]);
  const [resultados, setResultados] = useState(null);
  const [error, setError] = useState('');

  const agregarProyecto = () => {
    setProyectos([...proyectos, { id: proyectos.length + 1, nombre: '', costo: '', ganancia: '' }]);
  };

  const handleProyectoChange = (index, event) => {
    const nuevosProyectos = [...proyectos];
    nuevosProyectos[index][event.target.name] = event.target.value;
    setProyectos(nuevosProyectos);
  };

  const calcularOptimizacion = async () => {
    setError('');
    setResultados(null);

    const payload = {
      capacidad: parseInt(capacidad),
      objetos: proyectos.map(p => ({
        nombre: p.nombre,
        peso: parseInt(p.costo),
        ganancia: parseInt(p.ganancia)
      }))
    };

    try {
      const response = await axios.post('http://localhost:5000/optimizar', payload);
      setResultados(response.data);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Error de conexión con el servidor.');
    }
  };

  const limpiarFormulario = () => {
    setCapacidad('');
    setProyectos([{ id: 1, nombre: '', costo: '', ganancia: '' }]);
    setResultados(null);
    setError('');
  };

  return (
    <div className="container">
      <h1>Microservicio de Optimización de Inversiones</h1>

      <div className="input-section">
        <label>
          Capacidad (Presupuesto):
          <input 
            type="number" 
            value={capacidad} 
            onChange={e => setCapacidad(e.target.value)} 
            placeholder="Ej: 10000"
          />
        </label>
        
        <h2>Proyectos de Inversión</h2>
        {proyectos.map((proyecto, index) => (
          <div key={proyecto.id} className="proyecto-row">
            <input
              type="text"
              name="nombre"
              value={proyecto.nombre}
              onChange={e => handleProyectoChange(index, e)}
              placeholder="Nombre"
            />
            <input
              type="number"
              name="costo"
              value={proyecto.costo}
              onChange={e => handleProyectoChange(index, e)}
              placeholder="Costo"
            />
            <input
              type="number"
              name="ganancia"
              value={proyecto.ganancia}
              onChange={e => handleProyectoChange(index, e)}
              placeholder="Ganancia"
            />
          </div>
        ))}
        <button onClick={agregarProyecto}>Agregar otro proyecto</button>
      </div>

      <div className="buttons">
        <button onClick={calcularOptimizacion}>Calcular</button>
        <button onClick={limpiarFormulario}>Limpiar</button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {resultados && (
        <div className="results-card">
          <h2>Resultados de la Optimización</h2>
          <p><strong>Proyectos Seleccionados:</strong> {resultados.seleccionados.join(', ')}</p>
          <p><strong>Ganancia Total:</strong> {resultados.ganancia_total}</p>
          <p><strong>Costo Total:</strong> {resultados.peso_total}</p>
        </div>
      )}
    </div>
  );
}

export default App;