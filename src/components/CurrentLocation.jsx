import { SlTarget } from "react-icons/sl";
import styles from "./CurrentLocation.module.css";
import { useDispatch } from "react-redux";

function CurrentLocation() {
  const dispatch = useDispatch();

  const formattedsunrisesunset = (timezone) => {
    const time = new Date(timezone * 1000);

    const loacltime = time.toLocaleTimeString();

    return loacltime;
  };

  const apiData = async (latitude, longitude) => {
    let base = "https://api.openweathermap.org/data/2.5/";
    const apiKey = `e509c11cb4c0f194f2e5d0c84e57a833`;
    const url = `${base}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${apiKey}
  `;

    const respose = await fetch(url);
    const data = await respose.json();

    const sendsunrise = data.sys.sunrise;
    const sendsunset = data.sys.sunset;

    const sunrise = formattedsunrisesunset(sendsunrise);
    const sunset = formattedsunrisesunset(sendsunset);

    const responsefordayshours = await fetch(
      `https://www.meteosource.com/api/v1/free/point?place_id=${data.name}&sections=all&timezone=UTC&language=en&units=metric&key=8on9wvuekijf7f30ncntuayk4cxmrn452ur3cteu`
    );
    const result2 = await responsefordayshours.json();

    const currenticonname = result2.current.icon;
    const currenticonnum = result2.current.icon_num;

    const days = result2.daily.data;
    const hourly = result2.hourly.data;
    const icon = result2.daily.data;

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
      type: "CurrentLocation",
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

  const showLocation = (postion) => {
    const latitude = postion.coords.latitude;

    const longitude = postion.coords.longitude;

    apiData(latitude, longitude);
  };

  const handleOnClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLocation);
    }
  };
  return (
    <>
      <button
        onClick={handleOnClick}
        className="btn btn-sm btn-success rounded-pill h-100"
      >
        {" "}
        <SlTarget className={styles.icon} />
        Current Location
      </button>
    </>
  );
}

export default CurrentLocation;
