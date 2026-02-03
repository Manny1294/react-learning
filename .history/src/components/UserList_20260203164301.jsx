import { useState } from "react";
import axios from "axios";

const [users, setUsers] = useState(null);

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users");
});
