import React from 'react';
import { Link } from 'react-router-dom';
import '../home/css.css';
import CardProduct from '../../componentes/CardProduct';
import { ProductList } from '../../componentes/ProductList';

function HomePage() {
    return (
        <div>
            <header>
                <nav>
                    <h1>nini makeup</h1>
                    <ul>
                        <li><Link to="/register" className='option-nav'> Registrarse </Link></li>
                        <li><Link to="/login" className='option-nav'> Iniciar sesión </Link></li> 
                        <li><Link to="/admin" className='option-nav'> administrador </Link></li>
                    </ul>
                </nav>
            </header>

            <ProductList />
            <login/>


            <div className="card-container">
                <CardProduct />
                

            </div>

            <footer className="text-center" style={{ backgroundColor: '#dbdedc', minWidth: '300px' }}>

            </footer>
        </div>
    );
}

export default HomePage;
