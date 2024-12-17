import React, { useContext } from 'react';
import { CartContext } from './App';
import './Cart.css'; // Import the CSS file for styling

const Cart = () => {
  const { cart } = useContext(CartContext); // Access cart from context

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {Object.values(cart).length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {Object.values(cart).map((item) => (
            <div className="cart-item-card" key={item.name}>
              <img src={item.img} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <p className="cart-item-price">Price: ₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
