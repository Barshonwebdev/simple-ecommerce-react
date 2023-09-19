import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';
const Orders = () => {
    const savedCart=useLoaderData();
    const[cart,setCart]=useState(savedCart);
    const removeFromCart=(id)=>{
      const remaining= cart.filter(product=>product.id!==id);
      setCart(remaining);
      removeFromDb(id);
    }
    const removeCart=()=>{
      setCart([]);
      deleteShoppingCart();
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
          <Cart removeCart={removeCart} cart={cart}>
            <Link to="/checkout">
              <button className='checkout-button'>Proceed to checkout</button>
            </Link>
          </Cart>
        </div>
      </div>
    );
};

export default Orders;