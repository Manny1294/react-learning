import { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState(null);

  //fetch user when component first loads

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <>
      <div>
        return (
        <div>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        );
      </div>
    </>
  );
}
