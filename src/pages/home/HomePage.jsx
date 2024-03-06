import React from 'react';
import { Link } from 'react-router-dom';
import '../home/css.css';
import CardProduct from '../../componentes/CardProduct';
import ProductList from '../../componentes/ProductList';
import logoImage from './img/logo.png';
import cartImage from './img/cart.png';

function HomePage() {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src={logoImage} alt="Logo de la empresa"/>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li><Link to="/ofertas" className='option-nav-1'> ofertas </Link></li>
                        <li><Link to="/historial" className='option-nav-1'> historial </Link></li>
                        
                        <li><Link to="/pqrs" className='option-nav-1'> pqrs </Link></li>
                        {/* Aquí está tu nuevo menú de productos */}
                        <li><Link to="/productos" className='option-nav-1'> productos </Link></li>
                    </ul>
                    <div className="center-content">
                        <div className="search-box">
                            <input type="text" placeholder="Buscar productos..." />
                            <button type="submit">Buscar</button>
                        </div>
                    </div>
                    <ul className="nav-list">
                        <li><Link to="/register" className='option-nav-1'> crea tu cuenta </Link></li>
                        <li><Link to="/login" className='option-nav-2'> ingresa </Link></li>
                        <li>
                            <Link to="/carrito" className='option-nav-1 cart'>
                                <img src={cartImage} alt="Carrito de compras" />
                                <span className="cart-text"></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <ProductList />

            <div className="card-container">
                <CardProduct />
            </div>

            <footer className="text-center" style={{ backgroundColor: '#dbdedc', minWidth: '300px' }}>
            </footer>
        </div>
    );
}

export default HomePage;
