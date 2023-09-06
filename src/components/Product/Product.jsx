import './Product.css'
const Product = (props) => {
    const {img,name,seller,ratings,price}=props.product;
    return (
      <div className="product">
        <img src={img} alt="" />
        <div className="product-info">
          <h3 className='product-name'>{name}</h3>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} stars</p>
        </div>
        <button className="add-to-cart-button">Add to cart</button>
      </div>
    );
};

export default Product;