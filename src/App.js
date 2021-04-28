import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import DayTasks from './pages/DayTasks/DayTasks';
import { GlobalProvider } from './context/globalContext';
import CreateTaskModal from './components/Modals/CreateTaskModal';

function App() {
  return (
    <>
      <GlobalProvider>
        <CreateTaskModal />
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
