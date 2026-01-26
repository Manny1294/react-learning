import "./ProductCard.css";

const ProductDetails = {
  name: "Rice",
  price: "100",
  image: "",
};

function ProductCard() {
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
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
