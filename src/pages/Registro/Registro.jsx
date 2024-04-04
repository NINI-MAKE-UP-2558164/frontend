import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import "./register.css";

export  function Registro() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    celular: "",
    email: "",
    direccion: "",
    contrasena: "",
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `El campo ${key} es requerido`;
      }
    });

    if (
      !/(?=.*[A-Z])(?=.*[a-z].*[a-z].*[a-z].*[a-z].*[a-z])(?=.*[0-9])/.test(
        formData.contrasena
      )
    ) {
      newErrors.contrasena =
        "La contraseña debe tener al menos una mayúscula, cinco minúsculas y un número";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      fetch("http://127.0.0.1:8000/api/app1/Usuarios/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            setSuccessMessage("Usuario registrado exitosamente");
            setFormData({
              nombres: "",
              apellidos: "",
              celular: "",
              email: "",
              direccion: "",
              contrasena: "",
            });
          } else {
            response.json().then((data) => {
              if (data.email) {
                setErrorMessage(data.email);
              } else {
                setErrorMessage("Error al registrar usuario");
              }
            });
          }
        })
        .catch((error) => {
          setErrorMessage("Error al conectar con el servidor");
        });
    }
  };

  const handleGoogleRegister = async (googleData) => {
    const { givenName, familyName, email } = googleData.profileObj;

    const response = await fetch("http://127.0.0.1:8000/api/app1/Usuarios/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombres: givenName,
        apellidos: familyName,
        email: email,
      }),
    });

    if (response.ok) {
      setSuccessMessage("Usuario registrado exitosamente");
    } else {
      setErrorMessage("Error al registrar usuario");
    }
  };

  return (
    <div className="contenedor">
      <div className="App">
        <h1>Registro de Usuarios</h1>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombres:</label>
            <input
              type="text"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
            />
            <br />
            {errors.nombres && <span className="error">{errors.nombres}</span>}
          </div>
          <div>
            <label>Apellidos:</label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
            />
            <br />
            {errors.apellidos && (
              <span className="error">{errors.apellidos}</span>
            )}
          </div>
          <div>
            <label>Celular:</label>
            <input
              type="text"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
            />
            <br />
            {errors.celular && <span className="error">{errors.celular}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            {errors.email && <span className="error">{errors.email}</span>}
            {errorMessage && errorMessage.includes("email") && (
              <span className="error">{errorMessage}</span>
            )}
          </div>
          <div>
            <label>Dirección:</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
            <br />
            {errors.direccion && (
              <span className="error">{errors.direccion}</span>
            )}
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
            />
            <br />
            {errors.contrasena && (
              <span className="error">{errors.contrasena}</span>
            )}
          </div>
          <button className="button" type="submit">
            Registrarse
          </button>

          {/* Registro de usuarios con Google */}

          <GoogleLogin
            clientId="345897611839-h0oro79dfjnp5oek7389hus3h1vv70hg.apps.googleusercontent.com"
            buttonText="Registrarse con Google"
            onSuccess={handleGoogleRegister}
            onFailure={() => console.log("Fallo en el registro de usuario")}
            cookiePolicy={"single_host_origin"}
          />
        </form>
      </div>
    </div>
  );
}


