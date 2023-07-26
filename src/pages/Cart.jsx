import React from 'react';
import './css/cart.css';

const Cart = () => {
  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-items">
        {/* Render your cart items here */}
        {/* Example item */}
        <div className="cart-item">
          <img src="../images/guitar.png" alt="Item" className="item-image" />
          <div className="item-details">
            <h3 className="item-name">Item Name</h3>
            <p className="item-price">$19.99</p>
          </div>
          <button className="remove-button">Remove</button>
        </div>
      </div>
      <div className="cart-summary">
        <h2 className="summary-title">Summary</h2>
        <div className="summary-details">
          <p className="summary-subtotal">
            Subtotal: <span className="summary-value">$19.99</span>
          </p>
          <p className="summary-total">
            Total: <span className="summary-value">$19.99</span>
          </p>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;