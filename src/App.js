import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import HomePage from './pages/home/HomePage';
import CardProduct from './componentes/CardProduct';
import Login from './pages/login/login';
import Categorias from './componentes/categorias';
import Historial from './pages/historial/historial';
import Ofertas from './pages/ofertas/ofertas';
import Pqrs from './pages/pgrs/pqrs';
import Carrito from './pages/carrito/carrito';
import Productos from './pages/Admin/productos';
import Admin from './pages/Admin/Admin';
import Carousel from './componentes/carousel';
import { Registro } from './pages/Registro/Registro';
import {ProductDescription} from './componentes/ProductDescription';







function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<HomePage />} />
        <Route path='/list' element={<ProductList />} />
        <Route path='/products' element={<CardProduct />} />
        <Route path='/Carousel' element={<Carousel />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/Categorias' element={<Categorias />} />
        <Route path='/Historial' element={<Historial />} />
        <Route path='/Ofertas' element={<Ofertas />} />
        <Route path='/Pqrs' element={<Pqrs />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/ProductDescription/:productos.id' element={<ProductDescription />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Admin' element={<Admin />} />







      </Routes>
    </BrowserRouter>
  );
}

export default App;
