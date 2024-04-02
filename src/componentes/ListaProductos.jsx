import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListaProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/app1/productos/')
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
