import { useState } from "react";

export default function Toggle() {
  const [isdark, setIsDark] = useState(false);

  function toggleDark() {
    setIsDark(!isdark);
  }

  return (
    <>
      <div>
        <button onClick={toggleDark}>Click</button>
        <div
          style={{
            backgroundColor: isdark ? "black" : "red",
            width: "300px",
            height: "300px",
          }}
        ></div>
      </div>
    </>
  );
}
