import styles from "./Hourforecast.module.css";

import { useSelector } from "react-redux";

const Hourforecast = () => {
  const hourly = useSelector((store) => store.hourly);

  const time = (hour) => {
    const fetchtime = hour.date.split("T");

    const timesplit = fetchtime[1].split(":");
    const time = `${timesplit[0]}:${timesplit[1]}`;

    return time;
  };
  return (
    <>
      <div className="container p-3">
        <div className="row">
          <h3 className="fw-bolder text-center">24 Hours Forecast:</h3>
        </div>
        <div className="row d-flex justify-content-center">
          {hourly.map((hour, index) => (
            <>
              <div key={index} className="col-sm-2 my-2">
                <div className={styles.hourupdate}>
                  <p className="text-center m-0 fw-bold">{time(hour)}</p>

                  <div
                    className="m-auto"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <img
                      className="w-100"
                      src={`/icons/${hour.icon}.png`}
                      alt=""
                    />
                  </div>
                  <p className="text-center fw-bold">
                    {Math.round(hour.temperature)}°C
                  </p>

                  <p className="text-center fw-bold">
                    {Math.round(hour.wind.speed)}km/h
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hourforecast;
