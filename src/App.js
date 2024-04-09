import React, { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Product from './Product';
import { PRODUCTS_DATA } from './products';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import AddProductForm from './AddProductForm'; // Import the AddProductForm component
import UpdateProductForm from './UpdateProductForm'; // Import the UpdateProductForm component

function App() {
  const [products, setProducts] = useState(PRODUCTS_DATA); // Initialize products state with the initial products data
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

  const addProduct = (newProduct) => {
    newProduct.id = products.length + 1;
    setProducts(prevProducts => [...prevProducts, newProduct]);
    console.log('Product added successfully:', newProduct);
  };

  const updateProduct = (productId, updatedProduct) => {
    setProducts(products.map(product =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    ));
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId)); // Remove the product with the specified id from the products array
  };

  return (
    <div className="App">
      <Header onCartClick={handleCartClick} />
      <div className="container mt-5">
        <Routes>
          <Route path="/add-product" element={<AddProductForm addProduct={addProduct} />} />
          <Route
            path="/update-product/:productId"
            element={<UpdateProductForm products={products} updateProduct={updateProduct} />}
          />
          <Route path="/" element={showCart ? <Cart cart={cart} removeFromCart={removeFromCart} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} /> :
            <div className="row">
              {products.map(product => (
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={product.id}>
                  <Product product={product} addToCart={addToCart} />
                </div>
              ))}
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
