import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart]=useState([]);
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  useEffect(()=>{
    const storedCart=getShoppingCart();
    const savedCart=[];
    console.log(storedCart);
    for (const id in storedCart){
      const addedProduct=products.find(product=>product.id==id);
      if (addedProduct){
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          savedCart.push(addedProduct);
      }
      setCart(savedCart);
      
      console.log(addedProduct, "added");
    }
  },[products])
   const handleCart = (product) => {
     console.log(product);
     const newCart=[...cart,product];
     setCart(newCart);
     addToDb(product.id);
   };
  return (
    <div className="shop-container">
      <div className="products-container">
        {
            products.map(product=><Product handleCart={handleCart} key={product.id} product={product}></Product>)
        }
      </div>

      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
