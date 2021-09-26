
import React,{useState} from 'react';
import AllUsers from './components/AllUsers/AllUsers';
import AddUser from './components/AddUser/AddUser';
import './App.css';

function App() {
  const [Users,setUsers] = useState([]);

  function addUserEventHandler(user) {
    setUsers((prev)=>{
      return [...prev, user];
    })
  }
  return (
    <div className="content">
      <AddUser onAddUser={addUserEventHandler} />
      <AllUsers users = {Users} />
    </div>
  );
}

export default App;
