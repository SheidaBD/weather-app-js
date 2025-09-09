import { showModal } from "./modal.js";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "63f31253f70f276cd04d7e88f25ead75";

const getWeatherData = async (type, data) => {
  let url = null;
  switch (type) {
    case "current":
      if (typeof data === "string") {
        url = `${BASE_URL}/weather?q=${data}&appid=${API_KEY}`;
      } else {
        url = `${BASE_URL}/weather?lat=${data.lat}&lon=${data.lon}&appid=${API_KEY}`;
      }
      break;
    case "forecast":
      if (typeof data === "string") {
        url = `${BASE_URL}/forecast?q=${data}&appid=${API_KEY}`;
      } else {
        url = `${BASE_URL}/forecast?lat=${data.lat}&lon=${data.lon}&appid=${API_KEY}`;
      }
      break;
    default:
      url = `${BASE_URL}/weather?q=tehran&appid=${API_KEY}`;
      break;
  }
  try {
    const response = await fetch(url);
    const json = await response.json();
    if (+json.cod === 200) {
      return json;
    } else {
      showModal(json.message);
    }
  } catch (error) {
    showModal("an error when fetching data");
  }
};

export default getWeatherData;

/*
const getCurrentWeatherByName= async (city)=>{
    const url =`${BASE_URL}/weather?q=${city}&appid=${API_KEY}`;
    const response =await fetch(url);
    const json = await response.json()
    return json;
};
const getForecastWeatherByName= async (city)=>{
    const url =`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}`;
    const response =await fetch(url);
    const json = await response.json()
    return json;
};
const getCurrentWeatherByCoordinates= async (lat , lon)=>{
    const url =`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const response =await fetch(url);
    const json = await response.json()
    return json;
};

const getForecastWeatherByCoordinates= async (lat , lon)=>{
    const url =`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const response =await fetch(url);
    const json = await response.json()
    return json;
};
*/
