import React from 'react';
import '../csspages/'
 export function CardProduct(props) {
    return (
        <div className="views-cards">
            <img className='imgcards' src={"../pictures"} alt="" />
            <div className='container-text'>
                <p className='nombre-descriptivo'>{props.nombre}</p>
                <p className='descripcion'>{props.descripcion}</p>
                <p className='precio'>{props.precio}</p>
            </div>
        </div>
    )
}

export default CardProduct;