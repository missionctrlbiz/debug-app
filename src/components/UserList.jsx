import { useState, useEffect } from 'react';
import 'animate.css';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.users)); 
  }, []);
  console.log(users)
  

  return (
    <div className="user-list-container">
      <h1 className="animate__animated animate__bounce__delay-5s">Users</h1>
      <div className="grid-container">
        {users.map(user => (
          <div key={user.id} className="grid-item animate__headShake__delay-10s">
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="user-image" />
            <h2>{user.firstName} {user.lastName}</h2>
            <p style={{ fontWeight: '800', marginBottom: '5px' }}>Email:</p><span>{user.email}</span>
            {user.university && <p>University: {user.university}</p>} 
            {user.phone && <p>Phone: {user.phone}</p>} 
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;