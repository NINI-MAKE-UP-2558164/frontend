import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListaProductos from './components/ListaProductos';
import DetallesProducto from './components/DetallesProducto';
import CrearProducto from './components/CrearProducto';
import EditarProducto from './components/EditarProducto';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ListaProductos} />
          <Route exact path="/producto/:id" component={DetallesProducto} />
          <Route exact path="/producto/crear" component={CrearProducto} />
          <Route exact path="/producto/editar/:id" component={EditarProducto} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
