import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import DayTasks from './pages/DayTasks/DayTasks';
import TaskModal from './components/Modals/TaskModal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Authorization from './pages/Authorization/Authorization';
import { auth } from './Firebase/firebase';
import { GET_USER_ID } from './constants/constants';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsibscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: GET_USER_ID, payload: user.uid });
      }
    });
    return unsibscribe;
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
