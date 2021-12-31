import React, { useState } from "react";
import Adduser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserhandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <Adduser onAddUser={addUserhandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
