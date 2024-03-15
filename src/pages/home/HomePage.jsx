import React from 'react';
import { Link } from 'react-router-dom';
import '../home/css.css';
import CardProduct from '../../componentes/CardProduct';
import ProductList from '../../componentes/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from './img/logo.png';
import cartImage from './img/cart.png';
import aImage from './img/a.jpg';

function HomePage() {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src={logoImage} alt="Logo de la empresa" />
                </div>
                <nav>
                    <ul className="nav-list">
                        <li className="nav-list-dropdown">
                            <ul className='option-nav-1'> Categorías </ul>
                            <ul className="sub-nav">
                                <li><Link to="/categoria1">Categoría 1</Link></li>
                                <li><Link to="/categoria2">Categoría 2</Link></li>
                                <li><Link to="/categoria3">Categoría 3</Link></li>
                            </ul>
                        </li>
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
                                <span className="cart-text">0</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={aImage} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={aImage} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={aImage} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <ProductList />
            <div className="card-container">
                <CardProduct />
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Enlaces útiles</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/productos">Productos</Link></li>
                                <li><Link to="/contacto">Contacto</Link></li>
                                {/* Agrega más enlaces según sea necesario */}
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contacto</h5>
                            <ul className="list-unstyled">
                                <li>Correo electrónico: info@example.com</li>
                                <li>Teléfono: +123456789</li>
                                <li>Dirección: Dirección de la empresa, Ciudad, País</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Síguenos</h5>
                            <ul className="list-unstyled">
                                <li><a href="https://facebook.com">Facebook</a></li>
                                <li><a href="https://twitter.com">Twitter</a></li>
                                <li><a href="https://instagram.com">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <p>&copy; 2024 Nombre de la Empresa. Todos los derechos reservados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
