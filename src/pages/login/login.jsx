import React, { useState } from 'react';
import axios from 'axios';

import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError('Por favor, ingresa tu email y contraseña.');
        return;
      }

      const res = await axios.post('http://127.0.0.1:8000/api/app1/Usuarios/login/', {
        email: email,
        password: password
      });

      console.log('Inicio de sesión exitoso:', res.data);
      // Aquí puedes manejar lo que sucede después de un inicio de sesión exitoso, como redirigir al usuario a otra página
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };



 

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <div className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="button" onClick={handleLogin}>Iniciar sesión</button>
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
