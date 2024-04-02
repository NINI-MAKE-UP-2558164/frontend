import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../cssComponent/carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel() {
    const [carouselItems, setCarouselItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/app1/carousel/')
            .then(response => {
                setCarouselItems(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los datos del carrusel:', error);
            });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
            );
        }, 8000); // Cambiar cada segundo

        return () => clearInterval(interval);
    }, [carouselItems.length]);

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {carouselItems.map((item, index) => (
                    <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={item.id}>
                        <img src={item.imagen_url} className="d-block w-100" alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    );
}

export default Carousel;
