import "./styles/Cities.css";
import Dhaka from "../../assets/images/Dhaka.jpg";
import Chittagong from "../../assets/images/Chittagong.jpg";
import Sylhet from "../../assets/images/Sylhet.jpg";
import Rajshahi from "../../assets/images/Rajshahi.webp";
import Rangpur from "../../assets/images/Rangpur.jpg";
import Mymensingh from "../../assets/images/Mymensingh.jpg";

import { Link } from "react-router-dom";

const Cities = () => {
  const cities = [
    {
      name: "Dhaka",
      cover: Dhaka,
    },
    {
      name: "Mymensingh",
      cover: Mymensingh,
    },
    {
      name: "Rangpur",
      cover: Rangpur,
    },
    {
      name: "Rajshahi",
      cover: Rajshahi,
    },
    {
      name: "Chittagong",
      cover: Chittagong,
    },
    {
      name: "Sylhet",
      cover: Sylhet,
    },
    {
      name: "Sylhet",
      cover: Sylhet,
    },
    {
      name: "Sylhet",
      cover: Sylhet,
    },
    {
      name: "Sylhet",
      cover: Sylhet,
    },
  ];

  return (
    <>
      <div className={"container-fluid cities-container"}>
        <h2>Find us in these cities and many more!</h2>
        <div className={"cities "}>
          {cities.map((city, index) => (
            <Link
              className="card city slit-in-vertical"
              key={index}
              to={"/login"}
            >
              <img src={city.cover} className="card-img-top" alt="..." />
              <div className="card-body city-name">
                <p>{city.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/*<div className={'bottom-chilli'}>*/}
      {/*  <img src={Chilli} alt={'...'}/>*/}
      {/*</div>*/}
    </>
  );
};

export default Cities;
