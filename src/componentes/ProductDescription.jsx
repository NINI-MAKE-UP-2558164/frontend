import React, { useState, useEffect } from "react";
import axios from "axios";

export function ProductDescription(props) {
  const [producto, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productId = props.match.params.id; // Obtener el ID del producto de la URL
    axios
      .get(`http://127.0.0.1:8000/api/app1/productos/${productId}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del producto:", error);
        setLoading(false);
      });
  }, [props.match.params.id]); // Solo props.match.params.id debe ser la dependencia

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    
    <div>
      {producto ? (
        <div>
          <h2>{producto.nombre}</h2>
          <img src={producto.imagen} alt={producto.nombre} />
          <p>Precio: ${producto.precio}</p>
          <p>Disponibilidad: {producto.cantidad} unidades</p>
          {/* Otros detalles del producto */}
        </div>
      ) : (
        <div>Producto no encontrado</div>
      )}
    </div>
  );
}
