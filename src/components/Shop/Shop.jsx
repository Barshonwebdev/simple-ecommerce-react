import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";

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
  return (
    <div className="shop-container">
      <div className="products-container">
        <h3>Products Coming here: {products.length} </h3>
      </div>

      <div className="products-summary">
        <h4>Products Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
