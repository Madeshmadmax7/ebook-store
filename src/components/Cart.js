import React, { useState, useEffect } from 'react';  // Keep this line only
import { Link } from 'react-router-dom'; 
import '../styles/Cart.css';
import Navbar from './Navbar';

import GreatGatsby from '../img/GreatGatsby.jpg';
import NineteenEightyFour from '../img/1984.jpg';
import ToKillAMockingbird from '../img/tokillamockingbird.jpg';
import AManCalledOve from '../img/Amancalledove.jpg';
import FortuneMen from '../img/slider2_1.jpg';
import GoodAndEvil from '../img/slider2_2.jpg';
import OliverSacks from '../img/slider2_3.jpg';
import ArtOfHappiness from '../img/slider2_4.jpg';
import GreatestChallenge from '../img/slider2_5.jpg';
import WealthOfNations from '../img/slider2_6.jpg';
import ThinkingFastAndSlow from '../img/slider2_7.jpg';
import WayOfMen from '../img/slider2_8.jpg';

const getBookImageById = (id) => {
  const images = {
    1: GreatGatsby,
    2: NineteenEightyFour,
    3: ToKillAMockingbird,
    4: AManCalledOve,
    5: FortuneMen,
    6: GoodAndEvil,
    7: OliverSacks,
    8: ArtOfHappiness,
    9: GreatestChallenge,
    10: WealthOfNations,
    11: ThinkingFastAndSlow,
    12: WayOfMen,
  };

  return images[id] || null;  
};

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
          {cartItems.map((item, index) => {
            const bookImage = getBookImageById(item.id);  // Get the image based on the book ID
            return (
              <div className="cart-item small-card" key={item.id}>
                <div className="cart-item-details">
                  {bookImage && <img src={bookImage} alt={item.title} className="cart-item-image" />}
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
            );
          })}
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
