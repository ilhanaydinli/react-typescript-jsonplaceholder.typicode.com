import { useEffect, useState } from 'react';
import UserCard from './Components/UserCard';
import { UserType } from './Types/UserType';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const users = await axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users');
      console.log(users.data);
      setUsers(users.data);
    }
    fetchData();
  }, []);

  return (
    <div className='md:container md:mx-auto px-10 mt-10'>
      <div className='columns-1 sm:columns-3 gap-5'>
        {users.map((item) => (
          <UserCard
            key={item.id}
            image={`https://xsgames.co/randomusers/assets/avatars/pixel/${item.id}.jpg`}
            username={item.username}
            name={item.name}
            email={item.email}
            phone={item.phone}
            lat={item.address.geo.lat}
            lng={item.address.geo.lng}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
