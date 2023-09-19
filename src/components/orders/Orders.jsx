import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css'
import { removeFromDb } from '../../../utilities/fakedb';
const Orders = () => {
    const savedCart=useLoaderData();
    const[cart,setCart]=useState(savedCart);
    const removeFromCart=(id)=>{
      const remaining= cart.filter(product=>product.id!==id);
      setCart(remaining);
      removeFromDb(id);
    }
    console.log(cart);
    return (
      <div className="shop-container">
        <div className="review-container">
          {cart.map((product) => (
            <ReviewItems
              removeFromCart={removeFromCart}
              key={product.id}
              product={product}
            ></ReviewItems>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Orders;