import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import HomePage from './pages/home/HomePage';
import CardProduct from './componentes/CardProduct';
import Login from './pages/login/login';
import Categorias from './componentes/categorias';
import Admn from './pages/Admn/Admn';
import Historial from './pages/historial/historial';
import Ofertas from './pages/ofertas/ofertas';
import Pqrs from './pages/pgrs/pqrs';
import Carousel from './componentes/carousel';
import Carrito from './pages/carrito/carrito';
import { Registro } from './pages/Registro/Registro';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admn />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/list' element={<ProductList />} />
        <Route path='/products' element={<CardProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/Categorias' element={<Categorias />} />
        <Route path='/Historial' element={<Historial />} />
        <Route path='/Ofertas' element={<Ofertas />} />
        <Route path='/Pqrs' element={<Pqrs />} />
        <Route path='/Carousel' element={<Carousel />} />
        <Route path='/Carrito' element={<Carrito />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
