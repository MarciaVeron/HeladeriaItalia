import React, { useState } from 'react';
import './App.css';
import Home from './componentes/Home';
import Navbar from './componentes/Navbar';


import { BrowserRouter } from "react-router-dom";

import ProductosLista from './componentes/Productos';
/* import { Carrito } from './componentes/Carrito'; */

import data from './componentes/data';
import CarritoItem from './componentes/CarritoItem';






function App() {

  const {productos} = data;
  const [cartItems, setCartItems] = useState([]);


  return (


    <BrowserRouter>
      <Navbar />
      <Home />
      {/* <Carrito /> */}
      <div className='row'>
        <ProductosLista productos={productos} />
        <CarritoItem cartItems={cartItems}></CarritoItem>
      </div>
    </BrowserRouter>

  );
}

export default App;
