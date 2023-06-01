import './App.css';
import { useState } from 'react';
import UserCards from './components/user-cards';
import NavBar from './components/navbar';
import './components/userStyle.css';

export function App() {
  const [users, setUsers] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const loadUsers = async () => {
      // Make the API call to fetch users
      setIsLoading(true);

      // setTimeout so that animation can last for a little bit.
      setTimeout(async () => {
      try {
        const response = await fetch('https://reqres.in/api/users?page=1');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
      setIsLoading(false);
    }, 700);
    };
  
    return (
      <div>
        {/* // calls made */}
        <NavBar onButtonClick={loadUsers} />
        <UserCards users={users} isLoading={isLoading} />
      </div>
    );
  }
export default App;
