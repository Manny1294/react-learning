import { useState } from "react";

export default function ContactList() {
  // store all contacts in an array list
  const [contacts, setContacts] = useState([]);

  // Object to track what the user is currently typing in each input field
  const [input, setInput] = useState({ name: "", email: "", phone: "" });

  //   to spread the existing contacts and add the new entry amd also clear the input after adding new entry
  function addContact() {
    setContacts([...contacts, input]);
    setInput({ name: "", email: "", phone: "" });
  }

  return (
    <>
      <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
        <h2>Contact List</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="Name"
            value={input.name}
            onChange={(event) =>
              // when user types, spread existing input object and only update the name property
              setInput({ ...input, name: event.target.value })
            }
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="text"
            placeholder="Email"
            value={input.email}
            onChange={(event) =>
              setInput({ ...input, email: event.target.value })
            }
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="number"
            placeholder="Phone"
            value={input.phone}
            onChange={(event) =>
              setInput({ ...input, phone: event.target.value })
            }
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={addContact}
            style={{
              padding: "10px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Add Contact
          </button>
        </div>

        {/* Display contacts */}
        <ul style={{ listStyle: "none", marginTop: "20px", padding: 0 }}>
          {contacts.map((contact, index) => (
            <li
              key={index}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "12px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p style={{ margin: "4px 0", fontWeight: "600" }}>
                  {contact.name}
                </p>

                <p style={{ margin: "4px 0", color: "#666", fontSize: "14px" }}>
                  {contact.email}
                </p>

                <p style={{ margin: "4px 0", color: "#666", fontSize: "14px" }}>
                  {contact.phone}
                </p>
              </div>

              <button
                onClick={() =>
                  setContacts(contacts.filter((_, i) => i !== index))
                }
                style={{
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  padding: "6px 12px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
