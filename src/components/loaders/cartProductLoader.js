import { getShoppingCart } from "../../../utilities/fakedb";

const cartProductLoader = async()=>{
    const loadedProducts= await fetch ('products.json');
    const products= await loadedProducts.json();
    console.log(products);
    const storedCart= getShoppingCart();
    const savedCart= [];

    for (const id in storedCart){
        const addedProduct= products.filter(pd=>pd.id===id);
        if (addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            savedCart.push(addedProduct);
        }
    }
    console.log(savedCart);
    return savedCart;
}

export default cartProductLoader;