import { useState } from "react";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  const [input, setInput] = useState({ name: "", email: "", phone: "" });

  return (
    <>
      <div>
        <input></input>
      </div>
    </>
  );
}
