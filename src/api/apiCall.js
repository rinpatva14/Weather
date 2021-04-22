import axios from 'axios';
import {API_KEY, LIST_CITY} from './apiConstant';

async function getCityList() {
  try {
    const response = await axios.get(LIST_CITY);
    return response.data;
  } catch (error) {
    console.error('Error in get List City', error);
    return Promise.reject(error);
  }
}

async function getCurrentCity(lat, long) {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error in get Current City', error);
    return Promise.reject(error);
  }
}

export {getCityList, getCurrentCity};
