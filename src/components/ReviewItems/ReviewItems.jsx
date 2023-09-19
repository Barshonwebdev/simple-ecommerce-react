import React from 'react';
import './ReviewItems.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ReviewItems = ({product}) => {
    const {id,quantity,name,img,price}= product;
    console.log(product);
    return (
      <div className="items">
        <div className='item-elements'>
          <img src={img} alt="" />
          <div className="items-info">
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
          </div>
        </div>
        <div className='dlt'>
            <button className='dlt-button'><FontAwesomeIcon  icon={faTrash}/></button>
        </div>
      </div>
    );
};

export default ReviewItems;