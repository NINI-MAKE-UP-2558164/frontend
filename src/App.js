import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import Register from './pages/register/register';
import HomePage from './pages/home/HomePage';
import CardProduct from './componentes/CardProduct';
import Login from './pages/login/login';
import Categorias from './componentes/categorias';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/list' element={<ProductList />} />
        <Route path='/products' element={<CardProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Categorias' element={<Categorias/>}/>
    
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
