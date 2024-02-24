import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/messages" className="nav-link">Messages</Link>
          </li>
          <li className="nav-item">
            <Link to="/account" className="nav-link">Account</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className="nav-link">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
