// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './card.css';
// import { Link } from 'react-router-dom';


// function CardProduct() {
//     const [productos, setProductos] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/api/app1/productos')
//             .then(response => {
//                 console.log(response.data);
//                 setProductos(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error al obtener los datos de los productos:', error);
//                 setLoading(false); 
//             });
//     }, []);

//     if (loading) {
//         return <div>Cargando...</div>; 
//     }

//     return (
//         <div className="card-container">
//             {productos.map(producto => (
//                 <div className="card" key={producto.id} style={{ width: '18rem' }}>
//                     <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
//                     <div className="card-body">
//                         <h5 className="card-title">{producto.nombre}</h5>
//                         <p className="card-text">Precio: ${producto.precio}</p>
//                         <p className="card-text">Disponibilidad: {producto.cantidad} unidades</p>
//                         {productos.length > 0 && (
//                             <Link to={`/ProductDescription/${producto.id}`} className="btn btn-primary">Comprar</Link>
                            


//                         )}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default CardProduct;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./card.css";
import { Link } from "react-router-dom";

function CardProduct() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/app1/productos")
      .then((response) => {
        console.log(response.data);
        setProductos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de los productos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }
  

  return (
    <div className="card-container">
      {productos.map((producto) => (
        <div className="card" key={producto.id} style={{ width: "18rem" }}>
          <img
            src={producto.imagen}
            className="card-img-top"
            alt={producto.nombre}
          />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">Precio: ${producto.precio}</p>
            <p className="card-text">
              Disponibilidad: {producto.cantidad} unidades
            </p>
            {productos.length > 0 && (
              <Link
                to={`/ProductDescription/${producto.id}`}
                className="btn btn-primary"
              >
                Comprar
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardProduct;
