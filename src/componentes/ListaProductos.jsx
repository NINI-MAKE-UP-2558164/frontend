import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListaProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/productos_registro/')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProductos;
