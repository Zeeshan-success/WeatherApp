import { useSelector } from "react-redux";

const Dayforecast = () => {
  const daily = useSelector((store) => store.daily);

  //geting temperature and round off that
  const temp = (day) => {
    const temp = Math.round(day.all_day.temperature);

    return temp;
  };

  //getting date and also formatted into sequence
  const date = (day) => {
    const dateformated = day.day.split("-");

    const date = `${dateformated[2]}-${dateformated[1]}-${dateformated[0]}`;
    return date;
  };

  //getting icon and put in the coponent

  const icon = (day) => {
    const iconnum = day.icon;

    const icon = `/icons/${iconnum}.png`;

    return icon;
  };

  return (
    <>
      <div className="container ">
        <div className="row my-2 ">
          <h3 className="fw-bolder text-center">7 Days Forecast:</h3>
        </div>
        {daily.map((day, index) => (
          <>
            <div key={index} className="row my-2 text-center ">
              <div className="col-3">
                <img className="w-100" src={icon(day)} alt="" />
              </div>
              <div className="col-3 pt-3">
                <p className="fw-bold">{temp(day)}°C</p>
              </div>
              <div className="col-6 pt-3">
                <p className="fw-bold ">{date(day)}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Dayforecast;
