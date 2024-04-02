import React, { useState } from 'react';
import './Admin.css'
import { Link } from 'react-router-dom';
const Admin = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" onClick={toggleMenu} style={{ fontSize: '10px', padding: '10px', marginLeft: '10px' }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`offcanvas offcanvas-start ${showMenu ? 'show' : ''}`} tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
              <button type="button" className="btn-close btn-close-white" onClick={toggleMenu} aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/Productos" className='option-nav-1'> productos </Link>
                </li>
                <li className="nav-item">
                  <Link to="/crud_usuarios" className='option-nav-1'> usuarios </Link>
                </li>
                <li className="nav-item">
                  <Link to="/crud_pqr" className='option-nav-1'> pqrs </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" style={{ background: '' }} >Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid mt-5">
        <h1 id="home">bienvenido administrador</h1>

      </div>
    </div>
  );
};

export default Admin;
