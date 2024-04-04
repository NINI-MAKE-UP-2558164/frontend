import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import CardProduct from '../../componentes/CardProduct';
import ProductList from '../../componentes/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from './img/logo.png';
import cartImage from './img/cart.png';
import Carousel from '../../componentes/carousel';


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
                                <li><Link to="/categoria1">Belleza y cuidado</Link></li>
                                <li><Link to="/categoria2">Maquillaje</Link></li>
                                <li><Link to="/categoria3">Cuidado del cabello</Link></li>
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

                        <li><Link to="/Registro" className='option-nav-1'> Crea tu cuenta </Link></li>
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
            <Carousel />


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
                                <li><Link to='/admin' className='option-nav-1'>Administrador</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contacto</h5>
                            <ul className="list-unstyled">
                                <li>Correo electrónico: <a href="mailto:ninimakeup@gmail.com">ninimakeup@gmail.com</a></li>
                                <li>Teléfono: <a href="tel:+3184294756">+3184294756</a></li>
                                <li>Dirección: Bogotá, Colombia</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Síguenos</h5>
                            <ul className="list-unstyled">
                                <li><a href="https://facebook.com/nini-makeup" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                <li><a href="https://twitter.com/nini-makeup" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                <li><a href="https://instagram.com/nini-makeup" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <p>&copy; {new Date().getFullYear()} Nini Makeup. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default HomePage;
