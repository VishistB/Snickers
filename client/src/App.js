import './App.css';
import Vidcall from './components/Videocall/vidcall';
import Feedback from './components/Feedback/feedback';
import Dashboard from './components/Dashboard/Dashboard';
// import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">

      {/* <Vidcall/>   */}
      <Feedback/>
      <Dashboard/>
      <Navbar/>
      
    </div>
  );
}

export default App;
