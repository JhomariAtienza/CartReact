import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Product from './Product';
import { PRODUCTS_DATA } from './products';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (productToAdd) => {
    const existingItem = cart.find(item => item.id === productToAdd.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const decreaseQuantity = (productId) => {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem.quantity > 1) {
      setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item));
    } else {
      removeFromCart(productId);
    }
  };

  const increaseQuantity = (productId) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleCartClick = (value) => {
    setShowCart(value);
  };

  return (
    <div className="App">
      <Header onCartClick={handleCartClick} /> 
      <div className="container mt-5">
        {showCart ? (
          <Cart cart={cart} removeFromCart={removeFromCart} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} />
        ) : (
          <div className="row">
            {PRODUCTS_DATA.map(product => (
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={product.id}>
                <Product product={product} addToCart={addToCart} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
