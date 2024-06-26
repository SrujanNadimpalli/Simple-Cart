import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleDeleteFromCart, handleBuyItems }) => {
  return (
    <div className="cart section">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => handleDeleteFromCart(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <button className="buy-items" onClick={handleBuyItems}>Buy Items</button>
      )}
    </div>
  );
};

export default Cart;
