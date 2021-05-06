import { createStore, combineReducers } from 'redux';
import { dateReducer } from '../reducers/dateReducer';
import { tasksReducer } from '../reducers/tasksReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  dateReducer,
  tasksReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
