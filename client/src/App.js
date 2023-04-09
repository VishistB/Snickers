import './App.css';
import Vidcall from './components/Videocall/vidcall';
import Feedback from './components/Feedback/feedback';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Login from './components/LoginPage/Login';
import Register from './components/RegisterPage/Register';



function App() {
  return (
    <div className="App">
      <Vidcall/>  
      <Feedback/>
      <Navbar/>
      <Dashboard/>
      <Login/>
      <Register/>
      
    </div>
  );
}

export default App;
