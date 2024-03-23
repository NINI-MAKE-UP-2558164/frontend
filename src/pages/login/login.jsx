import React, { useState } from 'react';
import axios from 'axios';
import '../login/login.css';

function App() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/app1/Usuarios/login/', loginData);
      console.log(response.data);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };



  return (
    <div className='cont-app'>

      <div className="App">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Correo electrónico:
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Iniciar Sesión</button>
        </form>

      </div>
    </div>
  );
}

export default App;