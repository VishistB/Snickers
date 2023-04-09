import './App.css';
import Vidcall from './components/Videocall/vidcall';
import Feedback from './components/Feedback/feedback';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Login from './components/LoginPage/Login';
import { useState } from 'react';
import Register from './components/RegisterPage/Register';




function App() {
  const [vidbool,setvidbool] = useState(false)
  return (
    <div className="App">
      <button onClick={()=>setvidbool(!vidbool)} style={{margin:"0 auto", width:"100vw",height:"20px"}}/>
      {vidbool?(
      <Vidcall/>):
      (
      <>  
      <Navbar/>
      <Dashboard/>
      <Login/>
      <Feedback/>
      </>
      )
      }
      <Register/>
    </div>
  );
}

export default App;
