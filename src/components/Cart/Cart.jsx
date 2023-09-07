import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    let totalPrice=0;
    let shipping=0;
    for (const cartItem of cart){
        totalPrice=totalPrice+cartItem.price;
        shipping=shipping+cartItem.shipping;
    }
    const tax= totalPrice*8/100;
    const grandTotal=totalPrice+shipping+tax;
    return (
      <div className='cart-container'>
        <h4>Order Summary</h4>
        <p>Products added: {cart.length}</p>
        <p>Total price: ${totalPrice} </p>
        <p>Total Shipping Charge: ${shipping} </p>
        <p>Tax: ${tax.toFixed(2)} </p>
        <h3>Grand Total: ${grandTotal.toFixed(2)} </h3>
      </div>
    );
};

export default Cart;