import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import gamesReducer from './games';
import detailsReducer from './details';

const reducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
