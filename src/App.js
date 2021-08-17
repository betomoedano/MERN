import './App.css';
import axios from "axios";
import CreateUser from "./components/CreateUser"
import {useEffect, useState} from "react";

import Header from './components/Header';
import Logos from './components/Logos';

function App() {

  const [profiles, setProfiles] = useState([]); 
  const [newProfilePicture, setNewProfilePicture] = useState("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    return  await axios.get("https://mern-betomoedano.herokuapp.com/read")
    .then((res) => {
      //console.log(res.data);
      setProfiles(res.data);
    })
    .catch((e) => {console.log(e)});
  }

  const updatePicture = async (id) => {
    axios.put("https://mern-betomoedano.herokuapp.com/update", {
      id: id,
      newProfilePicture: newProfilePicture,
    });
  };

  const deleteUser = async (id) => {
    axios.delete(`https://mern-betomoedano.herokuapp.com/delete/${id}`);
  }
  return (
    <div className="bg-gray-50 dark:bg-gray-800 min-h-screen h-full overflow-y-scroll px-2">
      <Header></Header>
      <div className="mb-4">
        <h1 className="pt-6 mb-4 text-4xl font-bold dark:text-gray-50">Welcome to my little fullstack project</h1>
        <p className="font-semibold text-lg dark:text-gray-50">This is a App allows you to make CRUD operations using the MERN stack </p>
      </div>
      <Logos/>
      <CreateUser/>
      {
        profiles.map((user, userID) => (
          <div key={userID}>
            <p>{user.firstName}</p>
            <img src={user.profilePicture} style={{height:30, width:30}} alt=""/>
            <input type="text" placeholder="Paste new picture link" onChange={(event) => {setNewProfilePicture(event.target.value)}}/>
            <button onClick={() => updatePicture(user._id)}>Update</button>
            <button onClick={() => deleteUser(user._id)}>Delete User</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
