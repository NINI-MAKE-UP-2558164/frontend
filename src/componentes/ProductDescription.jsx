import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDescription = ({ match }) => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/app1/productos`);
        setProducto(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener la descripción del producto:', error);
        setLoading(false);
      }
    };

    fetchProducto();
  }, [match.params.id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!producto) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p><strong>Disponibilidad:</strong> {producto.cantidad} unidades</p>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      
    </div>
  );
};

export default ProductDescription;
