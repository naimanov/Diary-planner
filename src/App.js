import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import DayTasks from './pages/DayTasks/DayTasks';

function App() {
  return (
    <>
      <Navbar />
      <div class='main-layout'>
        <Sidebar />
        <DayTasks />
      </div>
    </>
  );
}

export default App;
