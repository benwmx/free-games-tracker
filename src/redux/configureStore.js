import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import gamesReducer from './games';

const reducer = combineReducers({
  games: gamesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
