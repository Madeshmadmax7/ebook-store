import React, { useState } from 'react';
import '../styles/Money.css';
import Navbar from './Navbar';

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
      <Navbar/>
      <div className="mno-cart-items">
        <h3>Selected Books</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="mno-cart-list">
            {cartItems.map((item, index) => (
              <div className="mno-cart-item" key={index}>
                <img src={item.image} alt={item.title} className="mno-item-image" />
                <div>
                  <h4>{item.title}</h4>
                  <p><strong>Author:</strong> {item.author}</p>
                  <p><strong>Price:</strong> {item.price}</p>
                </div>
              </div>
            ))}
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
          <button className="mno-close-btn" onClick={() => setOrderPlaced(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Money;
