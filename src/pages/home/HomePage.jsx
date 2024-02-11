import React from 'react';
import { Link } from 'react-router-dom';
import CardProduct from '../../componentes/CardProduct';

function HomePage() {
    return (
        <html>
            <head>
                <title>Nini Make-up</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="/img/logo.png" type="image/x-" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/carrito/css.css" />
                <link rel="stylesheet" href="/css/index/style.css" />
            </head>
            <body>
                <header>
                    <h1>hola</h1>
                </header>

                {/* Contenido del cuerpo de la página */}
                <Link to="/list">ir a la pagina de productos</Link>
                <CardProduct/>
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
