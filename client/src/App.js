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
import Landing from "./components/Landing/landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useToken from "./useToken";



function App() {
    const [vidbool, setVidbool] = useState(true);
 
    
    
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landing/>} />
                    <Route path="/Dashboard" element={<><Navbar/>
                <Topnav/><Dashboard/></>} />
                    <Route path="/home" element={<><Navbar/>
                <Topnav/><StudySession/></>} />
                    <Route path="/StudySession" element={<><Navbar/>
                <Topnav/><StudySession/></>} />
                    <Route path="/Vidcall" element={<Vidcall/>} />
                    <Route path="/Login" element={<Login/>} />
                    <Route path="/Register" element={<Register/>} />
                    <Route path="/Feedback" element={<Feedback/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
