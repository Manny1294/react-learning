import "./App.css";
import ProductCard from "./components/ProductCard";

export default function App() {
  const Product = {
    name: "rice",
    price: "200",
    image: "",
    description: "Nigerian-made long grain rice",
  };
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Product details</h1>
      <ProductCard
        name={Product.name}
        price={Product.price}
        image={Product.image}
        description={Product.description}
      />
    </div>
  );
}

// export default App;
