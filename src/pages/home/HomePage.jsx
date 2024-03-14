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
                    <img src={logoImage} alt="Logo de la empresa" />
                </div>
                <nav>
                    <ul className="nav-list">
                        <li><Link to="/Categorias" className='option-nav-1'> Categorías </Link></li>
                        <li><Link to="/ofertas" className='option-nav-1'> Ofertas </Link></li>
                        <li><Link to="/historial" className='option-nav-1'> Historial </Link></li>
                        <li><Link to="/pqrs" className='option-nav-1'> PQRS </Link></li>
                    </ul>
                    <div className="center-content">
                        <div className="search-box">
                            <input type="text" placeholder="Buscar productos..." />
                            <button type="submit">Buscar</button>
                        </div>
                    </div>
                    <ul className="nav-list">
                        <li><Link to="/register" className='option-nav-1'> Crea tu cuenta </Link></li>
                        <li><Link to="/login" className='option-nav-2'> Ingresa </Link></li>
                        <li>
                            <Link to="/carrito" className='option-nav-1 cart'>
                                <img src={cartImage} alt="Carrito de compras" />
                                <span className="cart-text">0</span> {/* Asegúrate de agregar un valor aquí */}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            <ProductList />
            <div className="card-container">
                <CardProduct />
            </div>
            <footer className="text-center" style={{ backgroundColor: '#dbdedc', minWidth: '300px' }}>
                {/* Contenido del footer */}
            </footer>
        </div>
    );
}

export default HomePage;
