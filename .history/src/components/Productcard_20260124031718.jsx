import "./ProductCard.css";

function ProductCard() {
  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Product details</h1>
      <div className="card">
        {/* left- pictures */}
        <div>
          <p>left</p>
        </div>

        {/* right */}
        <div>
          <p>right</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
