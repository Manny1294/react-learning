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
            setInput({ ...input, name: event.target.value });
          }}
        ></input>

        {/* email */}
        <input
          type="text"
          value={input.email}
          onChange={(event) => {
            console.log("Typing:", event.target.value);

            // spreads the input to reveal the full object and target the particular property needed
            setInput({ ...input, email: event.target.value });
          }}
        ></input>

        {/* phone */}
        <input
          type="number"
          value={input.phone}
          onChange={(event) => {

            console.log("Typing:", event.target.value);
            setInput({...input, phone: event.target.value)};
          }}
        ></input>
      </div>
    </>
  );
}
