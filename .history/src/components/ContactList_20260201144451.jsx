import { useState } from "react";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  const [input, setInput] = useState({ name: "", email: "", phone: "" });

  return (
    <>
      <div>
        {/* Name */}
        <input
          type="text"
          value={input.name}
          onChange={(event) => {
            console.log("Typing:", event.target.value);
            setInput(event.target.value);
          }}
        ></input>

        {/* email */}
        <input
          type="text"
          value={input.email}
          onChange={(event) => {
            console.log("Typing:", event.target.value);
            setInput(event.target.value);
          }}
        ></input>

        {/* phone */}
        <input
          type="number"
          value={input}
          onChange={(event) => {
            console.log("Typing:", event.target.value);
            setInput(event.target.value);
          }}
        ></input>
      </div>
    </>
  );
}
