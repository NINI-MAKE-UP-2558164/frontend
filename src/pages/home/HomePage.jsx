import React from 'react';
import { Link } from 'react-router-dom';

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

                <footer className="text-center" style={{ backgroundColor: '#dbdedc', minWidth: '300px' }}>
                    {/* Contenido del pie de página */}
                </footer>

                {/* Scripts y otros recursos */}
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
                <script src="/script/js.js"></script>
            </body>
        </html>
    );
}

export default HomePage;
