import "./ProductCard.css";

const Product = {
  name: "Rice",
  price: "100",
  image: "",
  description: "Nigerian made rice",
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
          <p>{Product.name}</p>
          <p>{Product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
