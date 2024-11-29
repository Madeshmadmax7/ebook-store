import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Money.css';
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

const Money = ({ cartItems = [] }) => {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOrderConfirmation = () => {
    if (!formData.address || !formData.city || !formData.state || !formData.pincode) {
      alert('Please fill all the fields');
      return;
    }
    setOrderPlaced(true);
  };

  return (
    <div className="mno-container">
      <Navbar />

      <div className="mno-cart-items">
        <h3>Selected Books</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="mno-cart-list">
            {cartItems.map((item, index) => {
              const bookImage = getBookImageById(item.id); 
              return (
                <div className="mno-cart-item" key={index}>
                  <img 
                    src={bookImage} 
                    alt={item.title} 
                    className="mno-item-image" 
                  />
                  <div>
                    <h4>{item.title}</h4>
                    <p><strong>Author:</strong> {item.author}</p>
                    <p><strong>Price:</strong> {item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <form className="mno-form">
        <h3>Shipping Details</h3>
        <input
          className="mno-input"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          className="mno-input"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          className="mno-input"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
        <input
          className="mno-input"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
        <button
          type="button"
          className="mno-submit-btn"
          onClick={handleOrderConfirmation}
        >
          Confirm Order
        </button>
      </form>

      {orderPlaced && (
        <div className="mno-popup">
          <h3>Order Placed Successfully!</h3>
          <p>Your order will be shipped to:</p>
          <p>{formData.address}, {formData.city}, {formData.state} - {formData.pincode}</p>
          <div className="entered-details">
            <h4>Entered Details:</h4>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>City:</strong> {formData.city}</p>
            <p><strong>State:</strong> {formData.state}</p>
            <p><strong>Pincode:</strong> {formData.pincode}</p>
          </div>
          <button className="mno-close-btn" onClick={() => setOrderPlaced(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Money;
