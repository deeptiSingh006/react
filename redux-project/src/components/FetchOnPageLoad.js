import { useEffect, useState } from 'react';
import axios from 'axios';
function FetchOnPageLoad() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
        
     try{
          const response = await axios('https://jsonplaceholder.typicode.com/users');
          console.log(response);
          setUsers(response.data);
     }
     catch ( error ){
         console.log("From Error Handling : " + error);
     }

     
    }
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((i) => <div>{i.email}</div>)}
    </div>
  );
}

export default FetchOnPageLoad;