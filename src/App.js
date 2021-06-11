import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import TaskModal from './components/Modal/TaskModal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Authorization from './pages/Authorization/Authorization';
import Registration from './pages/Authorization/Registration';
import Error404 from './pages/Error404/Error404';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/auth'>
            <Authorization />
          </Route>
          <Route path='/registration'>
            <Registration />
          </Route>
          <Route exact path='/'>
            <TaskModal />
            <Navbar />
            <MainPage />
          </Route>
          <Route path='/error'>
            <ErrorPage />
          </Route>
          <Route path='*'>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
