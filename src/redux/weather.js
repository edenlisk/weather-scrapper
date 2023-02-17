import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import fetchSingleCity from '../services/connectAPI';

const SELECT_CITY = 'SELECT_CITY';
const FETCH_CITY_WEATHERS = 'FETCH_CITY_WEATHERS';

const cities = ['Moscow', 'London', 'Paris', 'Cairo', 'Dubai', 'Kigali', 'Madrid', 'New York', 'Roma', 'Nairobi', 'Dodoma', 'Ottawa'];

export const retrieveWeather = createAsyncThunk(FETCH_CITY_WEATHERS, async (obj, thunkAPI) => {
  const currentState = thunkAPI.getState();
  if (currentState.weather.length === 0) {
    const promises = [];
    for (let i = 0; i < cities.length; i += 1) {
      const newData = fetchSingleCity(cities[i]);
      promises.push(newData);
    }
    const weatherData = await Promise.all(promises);
    return weatherData;
  }
  return currentState.weather;
});

const INITIAL_STATE = [];

export const weatherReducer = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(retrieveWeather.fulfilled, ((state, action) => action.payload))
    .addDefaultCase(((state) => state));
}));

export const selectCity = createAction(SELECT_CITY, (city) => ({
  payload: city,
}));

const selectedCity = null;

export const selectCityReducer = createReducer(selectedCity, ((builder) => {
  builder
    .addCase(selectCity, ((state, action) => action.payload))
    .addDefaultCase(((state) => state));
}));
