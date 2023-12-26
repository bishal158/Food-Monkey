import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles/MostOrderedFood.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { ProductContext } from "../../context/ProductContext.jsx";
import { BASEURL } from "../../../config.js";

const MostOrderedFood = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className={"most-ordered-foods-container"}>
        <h2>Our Most Ordered Foods</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 200,
            modifier: 1,
          }}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {products.length > 0 &&
            products.map((product) => {
              return (
                <SwiperSlide key={product._id}>
                  <div className={"most-ordered-foods"}>
                    <div className={"most-ordered-food-image"}>
                      <img
                        src={`${BASEURL}` + product.product_image_1}
                        alt={"...."}
                      />
                    </div>
                    <div className={"most-ordered-food-details"}>
                      <h5>{product.product_name}</h5>
                      <p>
                        {product.product_price}
                        <FontAwesomeIcon
                          icon={faBangladeshiTakaSign}
                          className={"fa-fade link-primary"}
                        />
                      </p>
                      <Link
                        to={`/product-details/${product._id}`}
                        className={"button"}
                      >
                        Product Details
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default MostOrderedFood;
