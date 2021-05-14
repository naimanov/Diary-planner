import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import DayTasks from './pages/DayTasks/DayTasks';
import { AuthProvider } from './context/AuthContext';
import TaskModal from './components/Modals/TaskModal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Authorization from './pages/Authorization/Authorization';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Authorization />
            </Route>
            <Route path='/home'>
              <TaskModal />
              <Navbar />
              <div className='main-layout'>
                <Sidebar />
                <DayTasks />
              </div>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
