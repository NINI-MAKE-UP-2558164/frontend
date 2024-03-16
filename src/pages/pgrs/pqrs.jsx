import React, { useState } from 'react';

const Pqrs = () => {
    // Estado local para almacenar los valores del formulario
    const [pqrsData, setPqrsData] = useState({
        type: '',
        description: '',
        email: '',
        name: '',
        date: '', // Nuevo campo para la fecha de envío
    });

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPqrsData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Realizar la solicitud POST a la API REST
            const response = await fetch('http://localhost:8000/api/app1/pqrs', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pqrsData)
            });
            if (response.ok) {
                console.log('Datos del formulario enviados correctamente');
                // Lógica adicional después de enviar los datos...
            } else {
                console.error('Error al enviar los datos del formulario');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '80%', maxWidth: '600px', padding: '20px', border: '2px solid #ccc', borderRadius: '8px' }}>
                <fieldset>
                    <legend style={{ textAlign: 'center', marginBottom: '20px' }}>Formulario de PQRS</legend>
                    <div className="mb-3">
                        <label htmlFor="tipoPqrs" className="form-label">Tipo de PQRS</label>
                        <select id="tipoPqrs" name="type" className="form-select" value={pqrsData.type} onChange={handleChange}>
                            <option value="">Seleccionar tipo</option>
                            <option value="peticion">Petición</option>
                            <option value="reclamo">Reclamo</option>
                            <option value="queja">Queja</option>
                            <option value="sugerencia">Sugerencia</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombreCompleto" className="form-label">Nombre completo</label>
                        <input type="text" id="nombreCompleto" name="name" className="form-control" value={pqrsData.name} onChange={handleChange} placeholder="Ingrese su nombre completo" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="correoElectronico" className="form-label">Correo electrónico</label>
                        <input type="email" id="correoElectronico" name="email" className="form-control" value={pqrsData.email} onChange={handleChange} placeholder="Ingrese su correo electrónico" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcionPqrs" className="form-label">Descripción</label>
                        <textarea id="descripcionPqrs" name="description" className="form-control" rows="5" value={pqrsData.description} onChange={handleChange} placeholder="Ingrese la descripción de su PQRS"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fechaEnvio" className="form-label">Fecha de envío</label>
                        <input type="date" id="fechaEnvio" name="date" className="form-control" value={pqrsData.date} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" >Enviar</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Pqrs;
