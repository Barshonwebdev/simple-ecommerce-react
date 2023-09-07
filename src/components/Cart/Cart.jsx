import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    let total=0;
    for (const cartItem of cart){
        total=total+cartItem.price;
    }
    return (
      <div className='cart-container'>
        <h4>Order Summary</h4>
        <p>Products added: {cart.length}</p>
        <p>Total price: $ {total} </p>
        <p>Total Shipping Charge: $ </p>
        <p>Tax: $ </p>
        <h3>Grand Total: $ </h3>
      </div>
    );
};

export default Cart;