import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  // to track changes when typing in the input textbox
  const [input, setInput] = useState("");

  const todoList = todos.map((todo) => {
    todo;
  });

  // to add todo item to the todos array and clear the input to an empty string afterwards
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
        <p>{todoList}</p>
      </div>
    </>
  );
}
