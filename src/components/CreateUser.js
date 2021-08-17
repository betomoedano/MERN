import axios from "axios";
import { useState } from "react"

export default function CreateUser() {
    
    const [firstName, setFisrtName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [status, setStatus] = useState("");
    const [email, setEmail] = useState("");

    const saveUser = async () => {
        try{
            await axios.post("https://mern-betomoedano.herokuapp.com/post",
            {
                firstName: firstName,
                lastName: lastName,
                profilePicture: profilePicture,
                status: status,
                email: email
            });
            alert("User saved successfully!🎉🎉")
        }catch(e) {console.log(e)}

       
    }
    return(
        <div className="border-2 border-gray-900 border-opacity-30 rounded-md py-2 px-4 dark:border-gray-50 dark:border-opacity-40 mb-4">
            <form className="">
                <h2 className="dark:text-white text-center w-full font-bold text-xl  dark:text-gray-50">Create User</h2>
                <label className="font-semibold text-md text-gray-900 text-opacity-60 inline-block mb-1 dark:text-gray-50">First Name</label><br/>
                <input className="mb-4 w-full py-2 rounded-md pl-2 bg-transparent border-2 border-gray-900 border-opacity-20 " placeholder="First Name" onChange={(event) => {setFisrtName(event.target.value)}}></input><br/>
                <label className="font-semibold text-md text-gray-900 text-opacity-60 inline-block mb-1 dark:text-gray-50">Last Name</label><br/>
                <input className="mb-4 w-full py-2 rounded-md pl-2 bg-transparent border-2 border-gray-900 border-opacity-20 " placeholder="Last Name" onChange={(event) => {setLastName(event.target.value)}}></input><br/>
                <label className="font-semibold text-md text-gray-900 text-opacity-60 inline-block mb-1 dark:text-gray-50">Profile Picture</label><br/>
                <input className="mb-4 w-full py-2 rounded-md pl-2 bg-transparent border-2 border-gray-900 border-opacity-20 " placeholder="Image link only" onChange={(event) => {setProfilePicture(event.target.value)}}></input><br/>
                <label className="font-semibold text-md text-gray-900 text-opacity-60 inline-block mb-1 dark:text-gray-50">Status</label><br/>
                <input className="mb-4 w-full py-2 rounded-md pl-2 bg-transparent border-2 border-gray-900 border-opacity-20 " placeholder="Status" onChange={(event) => {setStatus(event.target.value)}}></input><br/>
                <label className="font-semibold text-md text-gray-900 text-opacity-60 inline-block mb-1 dark:text-gray-50">Email</label><br/>
                <input className="mb-4 w-full py-2 rounded-md pl-2 bg-transparent border-2 border-gray-900 border-opacity-20" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}></input><br/><br/>
                <div className="rounded-md bg-gray-800 w-full py-2 dark:bg-yellow-300 mb-4">
                    <button className="flex items-center justify-center w-full" onClick={saveUser}>
                        <span className=" font-semibold text-base text-gray-50 dark:text-gray-800">Save User</span>
                    </button>
                </div>
            </form>
        </div>

    )
}