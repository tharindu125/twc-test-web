import './App.css';
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';
import AddFirstContact from './Pages/AddFirstContact'
import Contacts from './Pages/Contacts';
import Edit from './Pages/Edit';
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
            <Route path="/Edit/:id" element={<Edit/>}/>
            
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
