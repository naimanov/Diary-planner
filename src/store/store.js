import { createStore, combineReducers, applyMiddleware } from 'redux';
import { dateReducer } from '../reducers/dateReducer';
import { tasksReducer } from '../reducers/tasksReducer';
import { calendarReducer } from '../reducers/calendarReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  dateReducer,
  tasksReducer,
  calendarReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
