import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  // to track changes when typing in the input textbox
  const [input, setInput] = useState("");

  // to add todo item to the todos object array and clear the input to an empty string afterwards
  function addTodos() {
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
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

        {/* conditional rendering */}
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleComplete(index)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "black",
              cursor: "pointer",
            }}
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    </>
  );
}
