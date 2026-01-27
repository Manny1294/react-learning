import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }
  return (
    <>
      <button>+</button>
      <p>{count}</p>
      <button>-</button>
    </>
  );
}
