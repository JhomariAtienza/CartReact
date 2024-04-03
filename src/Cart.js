import React from 'react';

function Cart({ cart, removeFromCart, decreaseQuantity, increaseQuantity }) {
  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div>
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td><img src={item.image} alt={item.title} className="img-fluid" style={{ maxWidth: '100px' }} /></td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>
                <button className="btn btn-danger mr-2" onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button className="btn btn-success ml-2" onClick={() => increaseQuantity(item.id)}>+</button>
              </td>
              <td>
                <button className="btn btn-secondary" onClick={() => removeFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2"></td>
            <td colSpan="2">Total Price: ${totalPrice.toFixed(2)}</td>
            <td>Total Items: {totalCartItems}</td>
          </tr>
        </tfoot>
      </table>
      
    </div>
  );
}

export default Cart;
