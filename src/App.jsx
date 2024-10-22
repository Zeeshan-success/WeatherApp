import BackGroundColore from "./components/BackGroundColore";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CurrentLocation from "./components/CurrentLocation";
import Clock from "./components/Clock";
import WeatherUpdate from "./components/Weatherupdate";
import Dayforecast from "./components/DayForecast";
import Hourforecast from "./components/Hourforecast";
import { useState } from "react";

function App() {
  const [Sate, setState] = useState("body");

  function click() {
    if (Sate === "body") {
      setState("black");
    } else if (Sate === "black") {
      setState("body");
    }
  }
  return (
    <>
      <div id={Sate}>
        <div className="container  pt-3 text-center">
          <div className="row d-flex justify-content-between ">
            <div className="col-md-2 my-1 ">
              <BackGroundColore handleClick={click}></BackGroundColore>
            </div>
            <div className="col-md-7 my-1  ">
              <SearchBar />
            </div>
            <div className="col-md-3 my-1 ">
              <CurrentLocation />
            </div>
          </div>
        </div>

        <div className="container my-4">
          <div className="row d-flex justify-content-between">
            <div className="col-md-4 my-3 borderRadius">
              <Clock />
            </div>
            <div className="col-md-7 my-3  borderRadius ">
              <WeatherUpdate />
            </div>
          </div>
        </div>

        <div className="container my-4 ">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-3 borderRadius my-3 ">
              <Dayforecast />
            </div>
            <div className="col-lg-8 my-3 borderRadius">
              <Hourforecast />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
