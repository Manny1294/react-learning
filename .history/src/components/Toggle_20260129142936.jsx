import { useState } from "react";

export default function Toggle() {
  const [isdark, setIsDark] = useState(false);

  return (
    <>
      <div>
        <button>Click</button>
        <p></p>
      </div>
    </>
  );
}
