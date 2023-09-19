import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart,removeCart,children}=props;
    let totalPrice=0;
    let shipping=0;
    let quantity=0;
    for (const cartItem of cart){
       //cartItem.quantity=cartItem.quantity||1;
      // if(cartItem.quantity===0){
      //  cartItem.quantity=1;
      // }
        totalPrice=totalPrice+cartItem.price*cartItem.quantity;
        shipping=shipping+cartItem.shipping;
        quantity=quantity+cartItem.quantity;
    }
    const tax= totalPrice*8/100;
    const grandTotal=totalPrice+shipping+tax;
    return (
      <div className='cart-container'>
        <h4>Order Summary</h4>
        <p>Products added: {quantity}</p>
        <p>Total price: ${totalPrice} </p>
        <p>Total Shipping Charge: ${shipping} </p>
        <p>Tax: ${tax.toFixed(2)} </p>
        <h3>Grand Total: ${grandTotal.toFixed(2)} </h3>
        <button onClick={removeCart} className='clear-button'>Clear Cart</button>
        {children}
      </div>
    );
};

export default Cart;