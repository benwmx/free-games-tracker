import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import gamesReducer from './games';
import detailsReducer from './details';
import themeReducer from './theme';

const reducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
  theme: themeReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
