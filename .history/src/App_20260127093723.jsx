import "./App.css";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import PerfumeImg from "./assets/perfume.jpg";
import Counter from "./components/Counter";

export default function App() {
  const Product = {
    name: "beans",
    price: "200",
    image: PerfumeImg,
    description: "Nigerian-made long grain rice",
  };
  const Product2 = {
    name: "orange",
    price: "700",
    image: PerfumeImg,
    description: "home made orange",
  };
  return (
    <div>
      <NavBar />
      <h1 style={{ marginBottom: "20px" }}>Product details</h1>
      <ProductCard
        name={Product.name}
        price={Product.price}
        image={Product.image}
        description={Product.description}
      />
      <ProductCard
        name={Product2.name}
        price={Product2.price}
        image={Product2.image}
        description={Product2.description}
      />
    </div>
  );
}

// export default App;
