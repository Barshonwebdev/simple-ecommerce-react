import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);
   const handleCart = (product) => {
     console.log(product);
   };
  return (
    <div className="shop-container">
      <div className="products-container">
        {
            products.map(product=><Product handleCart={handleCart} key={product.id} product={product}></Product>)
        }
      </div>

      <div className="order-summary">
        <h4>Order Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
