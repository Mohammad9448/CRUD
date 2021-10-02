
import React, { useState, useEffect } from 'react';
import AllUsers from './components/AllUsers/AllUsers';
import AddUser from './components/AddUser/AddUser';
import './App.css';
import Loader from './components/Loader/Loader';
import {db , onValue , ref} from './firebas'
import Modal from './components/UI/Modal/Modal';
import EditUser from './components/EditUser/EditUser';

function App() {
  // State Management
  const [Users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const [ShowModal, setShowModal] = useState(false);
  const [PopulatedUser, setPopulatedUser] = useState({});
  

  //EditClicked / Show Modal / populate User 
  async function editButtonClickhandler(id) {
    setShowModal(true);
    const user = Users.find(x => x.id === id);
    setPopulatedUser(user);
    
  }

   //Save changes [EDIT]
   async function SaveBtnClicked(id,newUser) {
    let URi = "https://rich-compiler-296319-default-rtdb.europe-west1.firebasedatabase.app/Users/"+id+".json";
    let response = await fetch(URi, {
      method: "PUt",
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'Application/Json'
      }

    });

    if (response.ok) {
      setShowModal(false); 
    }
    else {
      console.log(response.status);
    }
   
  
    
    
 
  }

  //fetch Data onPageLoad
  useEffect(() => {
     function fetchApi() {
     
      const UsersRef = ref(db, 'Users/');
      onValue(UsersRef, (snapshot) => {
        const data = snapshot.val();
       if (data != null) {
        const loadedData = [];

        for (let key in data) {
          loadedData.push({
            id: key,
            name: data[key].name,
            gender: data[key].gender,
            age: data[key].age
          });
        }
        setUsers(loadedData);
        setloading(false);
       }
      });
    }
    fetchApi();
  }, [])

  //Add New User
  async function addUserEventHandler(user) {
    let response = await fetch("https://rich-compiler-296319-default-rtdb.europe-west1.firebasedatabase.app/Users.json", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'Application/Json'
      }

    });

    if (response.ok) {
      //some Confirmation
    }
    else {
      console.log(response.status);
    }
  }
  //delete a User
   async function delButtonClickhandler(id) {
    if(window.confirm('Delete the User?')){
    let URi = "https://rich-compiler-296319-default-rtdb.europe-west1.firebasedatabase.app/Users/"+id+".json";
    let response = await fetch(URi, {
      method: "DELETE",
      
      headers: {
        'Content-Type': 'Application/Json'
      }

    });

    if (response.ok) {
      
    }
    else {
      console.log(response.status);
    }
  }
  }
  //Close Modal
  function closeModal() {
    setShowModal(false);
  }

   
  // Loader 
  let temp = null;
  if (loading) {
    temp = (<Loader />);
  }
  else {
    temp = (<AllUsers delButtonClicked={delButtonClickhandler} editButtonClicked={editButtonClickhandler} users={Users} />);
  }

  // JSX
  return (
    <React.Fragment>
      {ShowModal ? <Modal closeModal={closeModal}> <EditUser SaveBtnClicked={SaveBtnClicked} closeModal={closeModal}  PopulatedUser={PopulatedUser} /></Modal> : null}
      <div className="content">
        <AddUser onAddUser={addUserEventHandler} />

        {temp}
      </div>
    </React.Fragment>
  );
}

export default App;