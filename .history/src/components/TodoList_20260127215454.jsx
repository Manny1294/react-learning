import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>

        <button>Add</button>
        <p>{todos}</p>
      </div>
    </>
  );
}
