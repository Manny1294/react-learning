import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  // to track changes when typing in the input textbox
  const [input, setInput] = useState("");

  // to add todo item to the todos array and set the input 
  function addTodos() {
    setTodos([...todos, input]);
    setInput("");
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(event) => {
            console.log("Typing:", event.target.value);
            setInput(event.target.value);
          }}
        ></input>

        <button onClick={addTodos}>Add</button>
        <p>{todos}</p>
      </div>
    </>
  );
}
