import axios from "axios";
import {useEffect, useState} from "react";

export default function ReadUser () {
      const [profiles, setProfiles] = useState([]); 
  const [newProfilePicture, setNewProfilePicture] = useState("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    return  await axios.get("https://mern-betomoedano.herokuapp.com/read")
    .then((res) => {
      console.log(res.data);
      setProfiles(res.data);
    })
    .catch((e) => {console.log(e)});
  }

  const updatePicture = async (id) => {
    await axios.put("https://mern-betomoedano.herokuapp.com/update", {
      id: id,
      newProfilePicture: newProfilePicture,
    });
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://mern-betomoedano.herokuapp.com/delete/${id}`)
    .then(alert("User deleted successfully"));
  }

  return (
    <div className="">
        <h2 className="dark:text-white text-center w-full font-bold text-2xl  dark:text-gray-50 mb-4">Users in Database</h2>
        {
          profiles.map((user, userID) => (
            <div key={userID} className="border-2 border-gray-800 border-opacity-30 dark:border-gray-50 dark:border-opacity-30 rounded-2xl p-2 mb-4">
                <div className="flex items-center justify-center">
                    <img src={user.profilePicture} className="w-40 rounded-full shadow-lg" alt=""/>
                </div>
              <p className="text-center font-bold text-3xl m-4 dark:text-gray-50">{user.firstName} {user.lastName}</p>
              <p className="text-center font-semibold text-2xl m-4 text-gray-600 dark:text-gray-50">{user.status}</p>
              <p className="text-center font-semibold text-lg m-4 text-gray-400 dark:text-gray-50">Contact: {user.email}</p>

              <input className="mb-4 w-full py-2 rounded-md pl-2 bg-transparent dark:bg-gray-600 dark:text-gray-50  border-2 border-gray-900 border-opacity-20 " placeholder="Paste New Profile Picture" onChange={(event) => {setNewProfilePicture(event.target.value)}}></input><br/>

                <div className="rounded-md bg-gray-800 w-full py-2 dark:bg-blue-900 mb-4">
                    <button className="flex items-center justify-center w-full" onClick={() => updatePicture(user._id)}>
                        <span className=" font-semibold text-base text-gray-50 dark:text-gray-50">Update Picture</span>
                    </button>
                </div>
                <div className="rounded-md bg-red-800 bg-opacity-90 w-full py-2 dark:bg-red-800 mb-4">
                    <button className="flex items-center justify-center w-full" onClick={() => deleteUser(user._id)}>
                        <span className=" font-semibold text-base text-gray-50 dark:text-gray-50">Delete User</span>
                    </button>
                </div>

            </div>
          ))
        }
    </div>
  );
}