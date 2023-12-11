import "./styles/MostOrderedFood.css";
import "swiper";
import Bangladeshi from "../../assets/images/Bangladeshi.jpg";
import Japaness from "../../assets/images/Japaness.jpg";
import Thai from "../../assets/images/Thai.jpg";
import FastFood from "../../assets/images/FastFood.jpg";
import Chinese from "../../assets/images/Chiness.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";

const MostOrderedFood = () => {
  const mostorderedfoods = [
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
      <div className={"container-fluid most-ordered-foods-container"}>
        <h2>Most Ordered Foods</h2>
        <Swiper
          className={"most-ordered-foods"}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
        >
          <div className={""}>
            {mostorderedfoods.map((food, index) => (
              <SwiperSlide key={index}>
                <Link className="card food " to={"/login"}>
                  <img src={food.cover} className="card-img-top" alt="..." />
                  <div className="card-body food-name">
                    <p>{food.name}</p>
                    <p>
                      From {food.taka}
                      <FontAwesomeIcon icon={faBangladeshiTakaSign} />
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default MostOrderedFood;
