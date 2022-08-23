import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Users from './Users.js';

function App() {
  // Hook
  const [users, setUsers] = useState([]);

  // API 
  const url = "https://random-data-api.com/api/users/random_user?size=10";

  // To load the userlist after loading the page
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">

      {/* Display the  Users */}
      <div className='container'>
        <div className="users" >
          {
            users.map(user => {
              return <Users user={user} />;
            })
          }
        </div >

        {/* Button to fetch 10 news users */}
        <button className='btn-fetch' onClick={getUsers}>FETCH</button>
      </div>
    </div>

  );

  // Fetch users based on the API
  async function getUsers() {
    var result = await axios.get(url);
    setUsers(result.data);
    console.log(result.data);
  }
}

export default App;
