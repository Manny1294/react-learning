import { useState } from "react";

export default function Toggle() {
  const [isdark, setIsDark] = useState(false);

  return (
    <>
      <div>
        <button>Click</button>
        <div
          style={{
            backgroundColor: condition ? "black" : "red",
            width: "300px",
            height: "300px",
          }}
        ></div>
      </div>
    </>
  );
}
