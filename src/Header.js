import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ onCartClick }) {
  const [showCartIcon, setShowCartIcon] = useState(true);

  const handleClick = () => {
    onCartClick(true);
    setShowCartIcon(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Basic Ecommerce Site</Link>
        <button className="btn btn-link" onClick={handleClick}>
          {showCartIcon ? (
            <i className="fas fa-shopping-cart"></i>
          ) : (
            <Link to="/" className="nav-link"><i className="fas fa-home"></i></Link>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Header;
