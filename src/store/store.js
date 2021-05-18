import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { dateReducer } from '../reducers/dateReducer';
import { tasksReducer } from '../reducers/tasksReducer';
import { authReducer } from '../reducers/authReduser';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  dateReducer,
  tasksReducer,
  authReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
