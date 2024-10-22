import { CiSearch } from "react-icons/ci";
import styles from "./SearchBar.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";

function SearchBar() {
  const inputCity = useRef();
  const dispatch = useDispatch();

  const formattedsunrisesunset = (timezone) => {
    const time = new Date(timezone * 1000);

    const loacltime = time.toLocaleTimeString();

    return loacltime;
  };

  const apiData = async (latitude, longitude, cityName) => {
    let base = "https://api.openweathermap.org/data/2.5/";
    const apiKey = `e509c11cb4c0f194f2e5d0c84e57a833`;
    const url = `${base}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${apiKey}
  `;

    const respose = await fetch(url);
    const data = await respose.json();

    //for geting the days forcast and hourly forcast
    const responsefordayshours = await fetch(
      `https://www.meteosource.com/api/v1/free/point?place_id=${cityName}&sections=all&timezone=UTC&language=en&units=metric&key=8on9wvuekijf7f30ncntuayk4cxmrn452ur3cteu`
    );
    const result2 = await responsefordayshours.json();

    const currenticonname = result2.current.icon;
    const currenticonnum = result2.current.icon_num;

    const days = result2.daily.data;
    const hourly = result2.hourly.data;
    const icon = result2.daily.data;

    //for converting or changing formate of api sunrise and sunset

    const sendsunrise = data.sys.sunrise;
    const sendsunset = data.sys.sunset;

    const sunrise = formattedsunrisesunset(sendsunrise);
    const sunset = formattedsunrisesunset(sendsunset);

    //for getting the city or lat and lng to get that area time and date and also make dure that it looks readable

    const response = await fetch(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=W8BJ3L385QGC&format=json&by=position&lat=${latitude}&lng=${longitude}`
    );
    const result = await response.json();

    const formattedtimedate = result.formatted.split(" ");

    const timesplit = formattedtimedate[1].split(":");
    const time = `${timesplit[0]}:${timesplit[1]}`;
    const datesplit = formattedtimedate[0].split("-");
    const date = `${datesplit[2]}-${datesplit[1]}-${datesplit[0]}`;

    dispatch({
      type: "searchBar",
      payload: {
        cityName: data.name,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        sunrise: sunrise,
        sunset: sunset,
        pressure: data.main.pressure,
        weather: currenticonname,
        date: date,
        time: time,
        imgcode: currenticonnum,
        daily: days,
        hourly: hourly,
        icon: icon,
      },
    });
  };

  const weatherhumiditylikeohters = async (cityName) => {
    const base =
      "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    const apikey = "e509c11cb4c0f194f2e5d0c84e57a833";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;

    const response = await fetch(url);
    const data = await response.json();

    apiData(data.coord.lat, data.coord.lon, cityName);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const cityName = inputCity.current.value;

    weatherhumiditylikeohters(cityName);

    inputCity.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleOnSubmit} className={styles.SearchBar}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search for City"
          ref={inputCity}
        />
        <button className="btn d-none d-sm-inline ">
          <CiSearch className={styles.icon} />
        </button>
      </form>
    </>
  );
}

export default SearchBar;
