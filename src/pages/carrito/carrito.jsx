import React, { useState, useEffect } from 'react';

function ShoppingCart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const addToCart = () => {
        // Aquí puedes implementar la lógica para agregar productos al carrito
        // Por ejemplo, podrías tener una función que reciba el producto a agregar
        // y luego actualice el estado del carrito y el LocalStorage
    };

    return (
        <div className="shopping-cart">
            <h2>Carrito de Compras</h2>
            <ul>
                {cart.map((product, index) => (
                    <li key={index}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
            <button onClick={addToCart}>Agregar al Carrito</button>
        </div>
    );
}

export default ShoppingCart;
