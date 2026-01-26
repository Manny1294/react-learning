import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="card-container">
      <div className="card">
        {/* left- pictures */}
        <div>
          <p>left</p>
        </div>

        {/* right */}
        <div>
          <p>right</p>
          <p>{props.name}</p>
          <p>{props.price}</p>
          <p>{props.image}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
