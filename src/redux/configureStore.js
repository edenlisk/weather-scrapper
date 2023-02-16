import { legacy_createStore as createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { weatherReducer, selectCityReducer } from './weather';

const reducers = combineReducers({
  weather: weatherReducer,
  selectedCity: selectCityReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
