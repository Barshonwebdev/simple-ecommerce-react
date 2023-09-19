import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../../utilities/fakedb";

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
    // const newCart=[...cart,product];
    let newCart=[];
    const exists=cart.find(pd=>pd.id===product.id);
    if(!exists){
      product.quantity=1;
      newCart=[...cart, product];
    }
    else{
      exists.quantity=exists.quantity + 1;
      const remaining= cart.filter(pd=>pd.id!==product.id);
      newCart=[...remaining,exists];
    }
     setCart(newCart);
     addToDb(product.id);
   };
   const removeCart=()=>{
    setCart([]);
    deleteShoppingCart();
   }
  return (
    <div className="shop-container">
      <div className="products-container">
        {
            products.map(product=><Product handleCart={handleCart} key={product.id} product={product}></Product>)
        }
      </div>

      <div>
        <Cart removeCart={removeCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
