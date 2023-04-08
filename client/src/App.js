import './App.css';
import Vidcall from './components/Videocall/vidcall';
import Feedback from './components/Feedback/feedback';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Vidcall/>  
      <Feedback/>
      <Dashboard/>
    </div>
  );
}

export default App;
