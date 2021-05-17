import { createStore, combineReducers, applyMiddleware } from 'redux';
import { dateReducer } from '../reducers/dateReducer';
import { tasksReducer } from '../reducers/tasksReducer';
// import { authReducer } from '../reducers/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  dateReducer,
  tasksReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
