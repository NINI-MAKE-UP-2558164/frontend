import React from 'react';
import { Link } from 'react-router-dom';
import '../home/css.css'; // Importa el archivo CSS
import CardProduct from '../../componentes/CardProduct'; // Importa el componente de tarjeta

function HomePage() {
    return (
        <div>
            <header>
                <nav>
                    <h1>nini makeup</h1>
                    <ul>
                        <li><Link to="/register" className='option-nav'> Registrarse </Link></li>
                        <li><Link to="/login"className='option-nav'> Iniciar sesión </Link></li>
                    </ul>
                </nav>
            </header>

            {/* Contenido del cuerpo de la página */}
            <Link to="/list">ir a la pagina de productos</Link>

            {/* Aquí renderizamos las tarjetas */}
            <div className="card-container">
                <CardProduct />
            </div>

            <footer className="text-center" style={{ backgroundColor: '#dbdedc', minWidth: '300px' }}>
                {/* Contenido del pie de página */}
            </footer>
        </div>
    );
}

export default HomePage;
