import "./styles/Cities.css";
function Cities(options) {
  const cities = ["Dhaka", "Mymensingh", "Chittagong", "Sylhet", "Rangpur"];

  return (
    <>
      <div className={"container-fluid cities-container"}>
        <h2>Find us in these cities and many more!</h2>
        <div className={"cities"}>
          {cities.map((city) => (
            <div className="card city" key={city}>
              <div className="card-body">{city}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cities;
