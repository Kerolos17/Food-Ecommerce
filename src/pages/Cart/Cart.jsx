/* eslint-disable no-unused-vars */
import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { StoreContext } from "./../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromcart , getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="catr-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>$ {cartItems[item.id] * item.price}</p>
                  <p onClick={() => removeFromcart(item.id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-totla-details">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-totla-details">
              <p>Shipping</p>
              <p>$ {getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-totla-details">
              <p>Total</p>
              <p>$ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button className="checkout-btn" onClick={()=>(navigate('/order')) }>Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Apply Promo Code</p>
            <div className="cart-promocode-input">
            <input type="text" placeholder="Enter Promo Code" />
            <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
