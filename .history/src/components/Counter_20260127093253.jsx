import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count);
  }

  return (
    <>
      <button>+</button>
      <p>{count}</p>
      <button>-</button>
    </>
  );
}
