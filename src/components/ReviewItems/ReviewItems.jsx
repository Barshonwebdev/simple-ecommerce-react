import React from 'react';
import './ReviewItems.css'
const ReviewItems = ({product}) => {
    const {id,name,img,price}= product;
    console.log(product);
    return (
        <div className='items'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default ReviewItems;