import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Admn/Admin.css';

const Admn = () => {
  const [Productos, setProductosRegistro] = useState([]);
  const [formData, setFormData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/app1/productos");
      setProductosRegistro(response.data);
    } catch (error) {
      console.error('error al obtener productos', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.nombre) {
      newErrors.nombre = 'Este campo es obligatorio';
    }
    if (!formData.cantidad) {
      newErrors.cantidad = 'Este campo es obligatorio';
    }
    if (!formData.precio) {
      newErrors.precio = 'Este campo es obligatorio';
    }

    // Si hay errores, no se envía el formulario
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append('nombre', formData.nombre);
      formDataWithImage.append('cantidad', formData.cantidad);
      formDataWithImage.append('precio', formData.precio);
      formDataWithImage.append('imagen', selectedImage);

      await axios.post("http://127.0.0.1:8000/api/app1/productos/", formDataWithImage);
      setFormData({});
      fetchData();
      setSelectedImage(null);
      setErrors({});
    } catch (error) {
      console.error('error al enviar productos', error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'imagen') {
      setSelectedImage(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className='cont-princ'>
      <div>
        <h1>Productos</h1>

        <div className='content-form'>
          <form onSubmit={handleSubmit}>
            <label>
              Nombre:<br />
              <input type="text" name="nombre" value={formData.nombre || ''} onChange={handleChange} />
              <div className='rerro-content'>
                {errors.nombre && <span>{errors.nombre}</span>}
              </div>
            </label>
            <label>
              Cantidad:<br />
              <input type="number" name="cantidad" value={formData.cantidad || ''} onChange={handleChange} /><br></br><br></br>
              <div className='rerro-content'>
                {errors.cantidad && <span>{errors.cantidad}</span>}
              </div>
            </label>
            <label>
              Precio:<br />
              <input type="number" name="precio" value={formData.precio || ''} onChange={handleChange} />
              <div className='rerro-content'>
                {errors.precio && <span>{errors.precio}</span>}
              </div>
            </label>
            <label>
              Imagen:
              <input type="file" name="imagen" onChange={handleChange} />
            </label>
            <div className='btn-content'>
              <button type="submit">Registrar Producto</button>
            </div>
          </form>
        </div>
        <div className='table-content'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {Productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.precio}</td>
                  <td><img src={`http://127.0.0.1:8000/${producto.imagen}`} alt={producto.nombre} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admn;
