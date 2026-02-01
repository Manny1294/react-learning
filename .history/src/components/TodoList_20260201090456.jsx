import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  // to track changes when typing in the input textbox
  const [input, setInput] = useState("");

  const [filter, setFilter] = useState("all");

  // to add todo item to the todos object array and clear the input to an empty string afterwards
  function addTodos() {
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  }

  // to delete each todo item by filtering through the index
  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  // to strike through a completed todo item using the index as identifier
  function toggleComplete(index) {
    setTodos(
      todos.map((todo, i) =>
        // confirm if it's the todo we click on and change status if not leave as it is
        i === index ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  let filteredTodos;
  if (filter === "all") {
    filteredTodos = todos;
  } else if (filter === "complete") {
    filteredTodos = todos.filter((todo) => todo.completed === true);
  } else if (filter === "incomplete") {
    filteredTodos = todos.filter((todo) => todo.completed === false);
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
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            margin: "5px",
          }}
        >
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("incomplete")}>Incomplete</button>
          <button onClick={() => setFilter("complete")}>Complete</button>
        </div>

        {/* conditional rendering */}
        {todos.map((filteredTodos, index) => (
          <li
            key={index}
            onClick={() => toggleComplete(index)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "red" : "black",
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
