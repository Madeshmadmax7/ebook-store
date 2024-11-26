import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Cart.css';
import Navbar from './Navbar';

const Cart = ({ cartItems, updateCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      const price = item.price;
      if (price && price.startsWith('$')) {
        return sum + parseFloat(price.slice(1));
      }
      return sum;
    }, 0);
    setTotalPrice(total.toFixed(2));
  }, [cartItems]);

  const removeItem = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    updateCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div className="cart-container">
      <Navbar />
      <h2 className="cart-header">Your Cart</h2>
      <div className="cart-total">
        <p><strong>Total: ${totalPrice}</strong></p>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item small-card" key={item.id}>
              <div className="cart-item-details">
                <img src={`${process.env.PUBLIC_URL}${item.image}`} alt={item.title} className="cart-item-image" />
                <div className="cart-item-text">
                  <h4>{item.title}</h4>
                  <p><strong>Author:</strong> {item.author}</p>
                  <p><strong>Price:</strong> {item.price}</p>
                </div>
              </div>
              <i
                className="fas fa-trash-alt delete-icon"
                title="Remove Item"
                onClick={() => removeItem(index)}
              ></i>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <Link to="/money" className="checkout-button">
          Proceed to Checkout
        </Link>
      )}
    </div>
  );
};

export default Cart;
