import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import DayTasks from './pages/DayTasks/DayTasks';
import { GlobalProvider } from './context/globalContext';
import TaskModal from './components/Modals/TaskModal';

function App() {
  return (
    <>
      <GlobalProvider>
        <TaskModal />
        <Navbar />
        <div className='main-layout'>
          <Sidebar />
          <DayTasks />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
