import "./App.css";
import ProductCard from "./components/ProductCard";

export default function App() {
  const Product = {
    name: "rice",
    price: "200,",
  };
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Product details</h1>
      <ProductCard />
    </div>
  );
}

// export default App;
