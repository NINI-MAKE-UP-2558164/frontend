import React from 'react';

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
                    {/* Resto del contenido del header adaptado a JSX */}
                </header>

                {}

                <footer className="text-center" style={{ backgroundColor: '#dbdedc', minWidth: '300px' }}>
                    {/* Contenido del footer adaptado a JSX */}
                </footer>

                {/* Scripts */}
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
                <script src="/script/js.js"></script>
            </body>
        </html>
    );
}

export default HomePage;
