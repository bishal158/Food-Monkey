import "./styles/FoodCategories.css";
import { Link } from "react-router-dom";
import Bangladeshi from "../../assets/images/Bangladeshi.jpg";
import Japaness from "../../assets/images/Japaness.jpg";
import Thai from "../../assets/images/Thai.jpg";
import FastFood from "../../assets/images/FastFood.jpg";
import Chinese from "../../assets/images/Chiness.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";

const FoodCategories = () => {
  const food_categories = [
    {
      name: "Bangladeshi",
      cover: Bangladeshi,
      taka: 299,
    },
    {
      name: "Japaness",
      cover: Japaness,
      taka: 299,
    },
    {
      name: "Thai",
      cover: Thai,
      taka: 299,
    },
    {
      name: "FastFood",
      cover: FastFood,
      taka: 299,
    },
    {
      name: "Chinese",
      cover: Chinese,
      taka: 299,
    },
  ];

  return (
    <>
      <div className={"container-fluid food-categories-container"}>
        <h2>Food Categories</h2>
        <div className={"food-categories"}>
          {food_categories.map((food, index) => (
            <Link className="card food " key={index} to={"/login"}>
              <img src={food.cover} className="card-img-top" alt="..." />
              <div className="card-body food-name">
                <p>{food.name}</p>
                <p>
                  From {food.taka}
                  <FontAwesomeIcon icon={faBangladeshiTakaSign} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodCategories;
