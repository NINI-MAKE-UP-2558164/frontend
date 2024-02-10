// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList'; // Importa tu componente
import HomePage from './pages/home/HomePage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/list' element={<ProductList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
