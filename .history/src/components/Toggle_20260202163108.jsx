import { useState } from "react";

export default function Toggle() {
  const [isdark, setIsDark] = useState(false);

  // function to toggle the dark mode setting isDark to true
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
