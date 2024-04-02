import React,{ useState }from 'react'
import axios from 'axios';

export const Registro=() => {



const [usuarios, setDatos] = useState({
  nombres: "",
  apellidos: "",
  celular:"",
  email:"",
  direccion: "",
  contrasena:"",
});

const handleChange = (event) => {
  const { name, value } = event.target;
  setDatos({ ...usuarios, [name]: value });
};

const handleSubmit = async(event) => {
  event.preventDefault();
  try {
    const response = await axios.post(
      "http://localhost:8000/api/app1/Usuarios/",
      usuarios
    );
     console.log("Datos enviados con éxito:", response.data);
     alert("Registro exitoso"); // Muestra mensaje de alerta
     setDatos({
       // Limpia los campos del formulario
       nombres: "",
       apellidos: "",
       celular: "",
       email: "",
       direccion: "",
       contrasena: "",
     });
   
    // Aquí puedes manejar la respuesta de la API, como redirigir al usuario a otra página
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    // Aquí puedes manejar errores, como mostrar un mensaje de error al usuario
  }
};

return (
  <form onSubmit={handleSubmit}>
    <label>
      Nombres:
      <input
        type="text"
        name="nombres"
        value={usuarios.nombres || ""}
        onChange={handleChange}
      />
    </label>
    <label>
      Apellidos:
      <input
        type="text"
        name="apellidos"
        value={usuarios.apellidos || ""}
        onChange={handleChange}
      />
    </label>
    <label>
      celular:
      <input
        type="number"
        name="celular"
        value={usuarios.celular || ""}
        onChange={handleChange}
      />
    </label>

    <label>
      email:
      <input
        type="email"
        name="email"
        value={usuarios.email || ""}
        onChange={handleChange}
      />
    </label>
    <label>
      direccion:
      <input
        type="text"
        name="direccion"
        value={usuarios.direccion|| ""}
        onChange={handleChange}
      />
    </label>
    <label>
      constrasena:
      <input
        type="password"
        name="contrasena"
        value={usuarios.contrasena || ""}
        onChange={handleChange}
      />
    </label>
    <button type="submit">Enviar</button>
  </form>
);
}


