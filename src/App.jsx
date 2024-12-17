import React, { useState, createContext } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import Admin from './Admin';
import Cart from './Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Create a CartContext to manage the cart globally
export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState({}); // This will hold the cart items

  const addToCart = (item) => {
    const newCart = { ...cart };
    if (newCart[item.name]) {
      newCart[item.name].quantity += 1;
    } else {
      newCart[item.name] = { ...item, quantity: 1 };
    }
    setCart(newCart); // Update the cart state
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/Menu"} element={<Menu />} />
            <Route path={"/Cart"} element={<Cart />} />
            <Route path={"/Contact"} element={<Contact />} />
            <Route path={"/About"} element={<About />} />
            <Route path={"/Admin"} element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;
