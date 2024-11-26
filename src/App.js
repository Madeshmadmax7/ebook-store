import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Cart from './components/Cart';
import Money from './components/Money';
import Profile from './components/Profile';
import Notification from './components/Notification';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  const updateCart = (newCart) => {
    setCartItems(newCart);
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} updateCart={updateCart} />} />
          <Route path="/money" element={<Money cartItems={cartItems} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
