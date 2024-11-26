import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ navbarClass }) => {
  return (
    <nav className={`abc-navbar ${navbarClass}`}>
      <ul className="abc-nav-sidebar">
        <li><Link to="/" className="abc-nav-link"><i className="fas fa-home"></i><span>Home</span></Link></li>
        <li><Link to="/gallery" className="abc-nav-link"><i className="fas fa-book"></i><span>Gallery</span></Link></li>
        <li><Link to="/cart" className="abc-nav-link"><i className="fas fa-shopping-cart"></i><span>Shopping Cart</span></Link></li>
        <li><Link to="/money" className="abc-nav-link"><i className="fas fa-money-bill-wave"></i><span>Money</span></Link></li>
        <br />
        <br />
        <br />
        <br />
        <br />
        <li><Link to="/profile" className="abc-nav-link"><i className="fas fa-user"></i><span>Profile</span></Link></li>
        <li><Link to="/notifications" className="abc-nav-link"><i className="fas fa-bell"></i><span>Notifications</span></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
