import { createStore } from "redux";
const daily = [1, 2, 3, 4, 5, 6];
const hourly = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

const INITAL_VALUE = {
  cityName: "Faisalabad",
  temp: Math.round(20),
  feels_like: 18,
  humidity: 84,
  wind: Math.round(3.6),
  sunrise: "06:03:39",
  sunset: "06:03:39",
  pressure: 999,
  uv: 9,
  weather: "SUNNY",
  daily: daily.map((day) => ({
    all_day: { temperature: 32 },
    day: "2024-10-05",
    icon: 2,
  })),
  hourly: hourly.map((hour) => ({
    date: "2024-10-07T06:00:00",
    icon: 2,
    temperature: 33,
    wind: { speed: 1 },
  })),
  date: "05-10-2024",
  time: "07:31",
  imgcode: "2",
  icon: "image",
};

const reducer = (store = INITAL_VALUE, action) => {
  if (action.type === "CurrentLocation") {
    return {
      cityName: action.payload.cityName.toLocaleUpperCase(),
      temp: Math.round(action.payload.temp),
      wind: Math.round(action.payload.wind),
      humidity: Math.round(action.payload.humidity),
      feel_like: Math.round(action.payload.feels_like),
      pressure: action.payload.pressure,
      uv: Math.floor(Math.random() * 12),
      weather: action.payload.weather.toLocaleUpperCase(),
      date: action.payload.date,
      time: action.payload.time,
      sunrise: action.payload.sunrise,
      sunset: action.payload.sunset,
      imgcode: action.payload.imgcode,
      daily: action.payload.daily,
      hourly: action.payload.hourly,
      icon: action.payload.icon,
    };
  } else if (action.type === "searchBar") {
    return {
      cityName: action.payload.cityName.toLocaleUpperCase(),
      temp: Math.round(action.payload.temp),
      wind: Math.round(action.payload.wind),
      humidity: Math.round(action.payload.humidity),
      feel_like: Math.round(action.payload.feels_like),
      pressure: action.payload.pressure,
      uv: Math.floor(Math.random() * 12),
      weather: action.payload.weather.toLocaleUpperCase(),
      date: action.payload.date,
      time: action.payload.time,
      sunrise: action.payload.sunrise,
      sunset: action.payload.sunset,
      imgcode: action.payload.imgcode,
      daily: action.payload.daily,
      hourly: action.payload.hourly,
      icon: action.payload.icon,
    };
  }

  return store;
};

const citystore = createStore(reducer);

export default citystore;
