import './App.css';
import axios from "axios";
import CreateUser from "./components/CreateUser"
import {useEffect, useState} from "react";

function App() {

  const [profiles, setProfiles] = useState([]); 
  const [newProfilePicture, setNewProfilePicture] = useState("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    return  await axios.get("http://localhost:3001/read")
    .then((res) => {
      //console.log(res.data);
      setProfiles(res.data);
    })
    .catch((e) => {console.log(e)});
  }

  const updatePicture = async (id) => {
    axios.put("http://localhost:3001/update", {
      id: id,
      newProfilePicture: newProfilePicture,
    });
  };

  const deleteUser = async (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`);
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>this is a MERN test</p>
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
