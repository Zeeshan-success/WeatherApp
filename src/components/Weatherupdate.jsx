import image1 from "../assets/sunrise-white 1.png";
import image2 from "../assets/sunset-white 1.png";
import image4 from "../assets/humidity 1.png";
import image5 from "../assets/pressure-white 1.png";
import image6 from "../assets/uv-white 1.png";
import image7 from "../assets/wind 1.png";
import { useSelector } from "react-redux";

const weatherupdate = () => {
  const temp = useSelector((store) => store.temp);
  const humidity = useSelector((store) => store.humidity);
  const feel_like = useSelector((store) => store.feel_like);
  const wind = useSelector((store) => store.wind);
  const sunrise = useSelector((store) => store.sunrise);
  const sunset = useSelector((store) => store.sunset);
  const pressure = useSelector((store) => store.pressure);
  const uv = useSelector((store) => store.uv);
  const weather = useSelector((store) => store.weather);
  const imgcode = useSelector((store) => store.imgcode);

  let weatherimage = `/icons/${imgcode}.png`;

  return (
    <>
      <div className="container  g-0">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-4 ">
            <p
              className="m-0 p-0 fw-bolder text-center"
              style={{ fontSize: "4rem" }}
            >
              {temp}°C
            </p>
            <p className="m-0 p-0 text-center" style={{ fontSize: "1rem" }}>
              Feels like: {feel_like}°C
            </p>
            <div className="d-flex d-md-inline justify-content-center">
              <div className="d-md-flex m-auto mt-3 ">
                <div
                  className="m-auto"
                  style={{ height: "3rem", width: "3rem" }}
                >
                  <img src={image1} className="w-100 m-auto " alt="" />
                </div>

                <div className="mx-2 text-center  ">
                  <p className="m-0 p-o fw-bolder">Sunrise</p>
                  <p className="m-0 p-o">{sunrise}</p>
                </div>
              </div>
              <div className="d-md-flex m-auto mt-3 ">
                <div
                  className="m-auto"
                  style={{ height: "3rem", width: "3rem" }}
                >
                  <img src={image2} className="w-100 m-auto " alt="" />
                </div>

                <div className="mx-2 text-center">
                  <p className="m-0 p-o fw-bolder">Sunset</p>
                  <p className="m-0 p-o">{sunset}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5">
            <div className="m-auto" style={{ height: "8rem", width: "8rem" }}>
              <img className=" w-100" src={weatherimage} alt="image" />
            </div>
            <p className="text-center fw-bolder">{weather}</p>
          </div>
          <div className="col-2 m-auto">
            <div className="my-4">
              <div className="m-auto" style={{ height: "3rem", width: "3rem" }}>
                <img className="w-100" src={image4} alt="" />
              </div>
              <p className="m-0 p-0 text-center fw-bold">{humidity}%</p>
              <p className="m-0 p-0 text-center">Humidity</p>
            </div>
            <div className="my-4">
              <div className="m-auto" style={{ height: "3rem", width: "3rem" }}>
                <img className="w-100" src={image5} alt="" />
              </div>
              <p className="m-0 p-0 text-center fw-bold ">{pressure}hPa</p>
              <p className="m-0 p-0 text-center">Pressure</p>
            </div>
          </div>
          <div className="col-2 m-auto ">
            <div className="my-4">
              <div className="m-auto" style={{ height: "3rem", width: "3rem" }}>
                <img className="w-100" src={image7} alt="" />
              </div>
              <p className="m-0 p-0 text-center fw-bold">{wind}km/h</p>
              <p className="m-0 p-0 text-center  ">Wind</p>
            </div>
            <div className="my-4">
              <div
                className="m-auto "
                style={{ height: "3rem", width: "3rem" }}
              >
                <img className="w-100" src={image6} alt="" />
              </div>
              <p className="m-0 p-0 text-center fw-bold">{uv}</p>
              <p className="m-0 p-0 text-center ">UV</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default weatherupdate;
