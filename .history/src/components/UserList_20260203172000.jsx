import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);

  //fetch user when component first loads

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <>
      <div>
        <div>
          {users.map((user, id) => (
            <li
              key={id}
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
              {users.name}
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
