function BackGroundColore({ handleClick }) {
  return (
    <>
      <div className="form-check form-switch h-100 d-flex justify-content-md-center pt-1 ">
        <input
          onClick={handleClick}
          className="form-check-input   "
          style={{ height: "1.5rem", width: "3rem" }}
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
      </div>
    </>
  );
}

export default BackGroundColore;
