import './Product.css'
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
    const {img,name,seller,ratings,price}=props.product;
   const handleCart=props.handleCart;
    return (
      <div className="product">
        <img src={img} alt="" />
        <div className="product-info">
          <h5 className="product-name">{name}</h5>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} stars</p>
        </div>
        <button
          onClick={() => handleCart(props.product)}
          className="add-to-cart-button"
        >
          Add to cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    );
};

export default Product;