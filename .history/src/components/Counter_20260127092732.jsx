import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(0);
}

return (
  <>
    <button>+</button>
    <p>{count}</p>
  </>
);
