import './App.css';
import CreateUser from "./components/CreateUser"

import Header from './components/Header';
import Logos from './components/Logos';
import ReadUser from './components/ReadUser';

function App() {


  return (
    <div >
        <Header></Header>
      <div className="bg-gray-50 dark:bg-gray-800 min-h-screen h-full overflow-y-scroll px-2">
        <div className="mb-4">
          <h1 className="pt-6 mb-4 text-4xl font-bold dark:text-gray-50">Welcome to my little fullstack project</h1>
          <p className="font-semibold text-lg dark:text-gray-50">This is a App allows you to make CRUD operations using the MERN stack </p>
        </div>
        <Logos/>
        <CreateUser/>
        <ReadUser/>
      </div>

    </div>
  );
}

export default App;
