import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetch user when component first loads

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>loading ...</p>;
  return (
    <>
      <div>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
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
              {`${user.name} - ${user.address.city}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
