import './App.css';
// import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import DayTasks from './pages/DayTasks/DayTasks';
import TaskModal from './components/Modals/TaskModal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Authorization from './pages/Authorization/Authorization';
// import { auth } from './Firebase/firebase';
// import { getUserId } from './actions/auth';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       dispatch(getUserId(user.uid));
  //       console.log('login');
  //     } else {
  //       console.log('logout');
  //     }
  //   });
  // });
  // console.log('render');

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
