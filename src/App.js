import React, { useState } from 'react';
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandle = (userName, userAge) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { id: Math.random().toString(), name: userName, age: userAge },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandle} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
