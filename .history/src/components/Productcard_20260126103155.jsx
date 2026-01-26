import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image">{props.image}</div>

        <div className="card-content">
          <h3 className="card-title">{props.name}</h3>
          <p className="card-price">₦{props.price}</p>
          <p className="card-description">{props.description}</p>
          <button className="card-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
