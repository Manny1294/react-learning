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
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
