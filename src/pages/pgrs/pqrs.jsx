import React, { useState } from 'react';
import './pqrs.css';

const Pqrs = () => {
    const currentDate = new Date().toISOString().split('T')[0]; // Obtiene la fecha actual en formato YYYY-MM-DD

    const [pqrsData, setPqrsData] = useState({
        tipo: '',
        nombres_completos: '',
        correo: '',
        descripcion: '',
        created_at: currentDate // Establece la fecha actual como valor inicial
    });

    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPqrsData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const isFormValid = () => {
        return (
            Object.values(pqrsData).every(value => value !== '') &&
            /\S+@\S+\.\S+/.test(pqrsData.correo) // Validación de correo electrónico
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid()) {
            setAlertMessage('Por favor, llene todos los campos correctamente antes de enviar el PQRS.');
            return;
        }
        try {
            const response = await fetch('http://127.0.0.1:8000/api/app1/pqr/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pqrsData)
            });
            if (response.ok) {
                setAlertMessage('Datos del formulario enviados correctamente');
                // Lógica adicional después de enviar los datos...
            } else {
                setAlertMessage('Error al enviar los datos del formulario');
            }
        } catch (error) {
            setAlertMessage('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.');
        }
    };

    return (
        <div className="container">
            {alertMessage && <div className="alert">{alertMessage}</div>}
            <form onSubmit={handleSubmit} className="form">
                <fieldset>
                    <legend>Formulario de PQRS</legend>
                    <div className="form-group">
                        <label htmlFor="tipoPqrs">Tipo de PQRS</label>
                        <select id="tipoPqrs" name="tipo" value={pqrsData.tipo} onChange={handleChange}>
                            <option value="">Seleccionar tipo</option>
                            <option value="peticion">Petición</option>
                            <option value="reclamo">Reclamo</option>
                            <option value="queja">Queja</option>
                            <option value="sugerencia">Sugerencia</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nombreCompleto">Nombre completo</label>
                        <input type="text" id="nombreCompleto" name="nombres_completos" value={pqrsData.nombres_completos} onChange={handleChange} placeholder="Ingrese su nombre completo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="correoElectronico">Correo electrónico</label>
                        <input type="email" id="correoElectronico" name="correo" value={pqrsData.correo} onChange={handleChange} placeholder="Ingrese su correo electrónico" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcionPqrs">Descripción</label>
                        <textarea id="descripcionPqrs" name="descripcion" value={pqrsData.descripcion} onChange={handleChange} rows="5" placeholder="Ingrese la descripción de su PQRS"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="created_atEnvio">Fecha de envío</label>
                        <input type="date" id="created_atEnvio" name="created_at" value={pqrsData.created_at} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn">Enviar</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Pqrs;
