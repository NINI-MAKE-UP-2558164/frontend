// ProductList.js

import React, { useState, useEffect } from 'react';
import Servicio from './services/Servicio'; // Importa tu servicio

function ProductList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Servicio.getProductos();
        setProductos(data);
      } catch (error) {
        console.error('Error al obtener productos:', error);5
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
      <button> registrar </button>
     
    </div>
  );
}

export default ProductList;
