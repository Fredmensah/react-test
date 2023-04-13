import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './components/Card';
import { usersApi } from './services/http/users';
import { User } from './types/User';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsersFunc().then()
  }, []);

  const getUsersFunc = async () => {
    const response = await usersApi();
    
    if(response) {
      setUsers(response);
    } else {
      alert("OOPS. There was an error fetching users");
    }
  }

  const deleteItemHandler = (id:number) => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (  
    <div className="App">
      {
        users.map((user: User) => 
          <Card key={user.id} user={user} deleteItemFunc={deleteItemHandler} />
        )
      }
    </div>
  );
}

export default App;
