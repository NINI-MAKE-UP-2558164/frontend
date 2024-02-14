import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css'; // Importa el archivo CSS para la tarjeta

function CardProduct() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Realiza una solicitud para obtener los datos de los productos desde tu API
        axios.get('http://localhost:8000/api/app1/')
            .then(response => {
                setProductos(response.data); // Almacena los datos de los productos en el estado
            })
            .catch(error => {
                console.error('Error al obtener los datos de los productos:', error);
            });
    }, []); 

    return (
        <div className="card-container">
            {productos.map(producto => (
                <div className="card" key={producto.id}>
                    <img className='imgcards' src={producto.imagen} alt={producto.nombre} />
                    <div className='container-text'>
                        <h2>{producto.nombre}</h2>
                        <p>Precio: ${producto.precio}</p>
                        <p>Disponibilidad: {producto.cantidad} unidades</p>
                        <button>Comprar</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardProduct;
