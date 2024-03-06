import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Categorias = () => {


    console.log('sirve');
    const [TipoProducto, setTipoProducto] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8000/api/app1/')
            .then(response => {
                setTipoProducto(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los datos de los productos:', error);
            });
    }, []);

    <div className='catecorias'>

        Categorias
        <tr>
            <td>
                {TipoProducto.map(tipo => (

                        <td>
                            nombre: ${TipoProducto.tipo}
                        </td>
                    )
                )}





            </td>
        </tr>


    </div>

};

export default Categorias;