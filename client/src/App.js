import "./App.css";
import Vidcall from "./components/Videocall/vidcall";
import Feedback from "./components/Feedback/feedback";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/LoginPage/Login";
import { useState } from "react";
import Register from "./components/RegisterPage/Register";
import Topnav from "./components/Navbar/Topnav";
import StudySession from "./components/Studysession/StudySession";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const [vidbool, setvidbool] = useState(true);
    return (
        <div className="App">
            {/* <button onClick={()=>setvidbool(!vidbool)} style={{margin:"0 auto", width:"100vw",height:"20px"}}/> */}
            {/* {vidbool?(
      <Vidcall/>):
      (
      <>  
      <Topnav/>
      <Navbar/>
      <Dashboard/>
      <Login/>
      <Feedback/>
      <Register/>
      </>
      )
      } */}
            {/* <Topnav/> */}
            {/* <Vidcall/> */}
            {/* <Login/> */}
            
            <Router>
                <Navbar/>
                <Topnav/>
                <Routes>
                    <Route exact path="/" element={<Dashboard/>} />
                    <Route path="/StudySession" element={<StudySession/>} />
                    <Route path="/Vidcall" element={<Vidcall/>} />
                    <Route path="/Login" element={<Login/>} />
                    <Route path="/t" element={<Register/>} />
                </Routes>
                {/* <Footer/> */}
            </Router>
        </div>
    );
}

export default App;
