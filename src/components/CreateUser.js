import axios from "axios";
import { useState } from "react"

export default function CreateUser() {
    
    const [firstName, setFisrtName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [status, setStatus] = useState("");
    const [email, setEmail] = useState("");

    const saveUser = async () => {
        await axios.post("https://mern-betomoedano.herokuapp.com/post",
        {
            firstName: firstName,
            lastName: lastName,
            profilePicture: profilePicture,
            status: status,
            email: email
        }
        );
    }
    return(
        <form>
            <h2>Create User</h2>
            <label>First Name</label><br/>
            <input placeholder="First Name" onChange={(event) => {setFisrtName(event.target.value)}}></input><br/>
            <label>Last Name</label><br/>
            <input placeholder="Last Name" onChange={(event) => {setLastName(event.target.value)}}></input><br/>
            <label>Profile Picture</label><br/>
            <input placeholder="Sting only" onChange={(event) => {setProfilePicture(event.target.value)}}></input><br/>
            <label>Status</label><br/>
            <input placeholder="Status" onChange={(event) => {setStatus(event.target.value)}}></input><br/>
            <label>Email</label><br/>
            <input placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}></input><br/><br/>
            <button onClick={saveUser}>Save</button>
        </form>
    )
}