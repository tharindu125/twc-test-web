import './App.css';
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';
import AddFirstContact from './Pages/AddFirstContact'
import Contacts from './Pages/Contacts';
// import Text from './Pages/Text';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Welcome />} />
            <Route path="/AddFirstContact" element={<AddFirstContact/>} />
            <Route path="/Contacts" element={<Contacts/>}/>
            <Route path="/Login" element={<Login/>}/>

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
