import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <img
            src={props.image}
            alt={props.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

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
