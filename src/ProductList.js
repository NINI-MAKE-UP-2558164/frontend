// ProductList.js

import React, { useState, useEffect } from 'react';
import Servicio from './Servicio.js'; // Importa tu servicio

function ProductList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Servicio.getProductos();
        setProductos(data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
