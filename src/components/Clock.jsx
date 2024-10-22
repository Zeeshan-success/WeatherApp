import { useSelector } from "react-redux";

function Clock() {
  let cityName = useSelector((store) => store.cityName);
  const realtime = useSelector((store) => store.time);
  const realdate = useSelector((store) => store.date);

  return (
    <>
      <center className="my-5">
        <h1 className="fw-bolder">{cityName}</h1>

        <h3 className="fw-bolder">{realtime}</h3>
        <p>{realdate}</p>
      </center>
    </>
  );
}

export default Clock;
