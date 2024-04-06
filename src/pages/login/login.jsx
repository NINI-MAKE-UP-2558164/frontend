import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
 const [loggedIn, setLoggedIn] = useState(false); // Estado para redirigir

  const handleLogin = async () => {
    try {
      if (!email || !contrasena) {
        setError("Por favor, ingresa tu email y contraseña.");
        return;
      }

      const res = await axios.post("http://127.0.0.1:8000/api/app1/Usuarios/", {
        email: email,
        contrasena: contrasena,
      });

      console.log("Inicio de sesión exitoso:", res.data);
      // Aquí puedes manejar lo que sucede después de un inicio de sesión exitoso, como redirigir al usuario a otra página
      setLoggedIn(true); // Establecer el estado loggedIn a true
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  };

  if (loggedIn) {
    return <Navigate to="/Home/HomePage" />; // Redirigir a la página Home si el usuario ha iniciado sesión correctamente
  }

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="button">
            Iniciar sesión
          </button>
        </form>
        <div className="or-divider">o</div>
        <div className="google-login">
          {/* <GoogleLogin
              clientId="345897611839-h0oro79dfjnp5oek7389hus3h1vv70hg.apps.googleusercontent.com"
              buttonText="Registrarse con Google"
              onSuccess={handleGoogleRegister}
              onFailure={() => console.log('Fallo en el registro de usuario')}
              cookiePolicy={'single_host_origin'}
            /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
