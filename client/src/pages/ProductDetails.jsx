import "swiper/css";
import "swiper/css/pagination";

import "./styles/ProductDetails.css";
import Pasta from "../assets/images/promotion/Pasta.jpg";
import bkash from "../assets/images/promotion/Bkash.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBangladeshiTakaSign, faCartPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function ProductDetails() {
  return (
    <>
      <div className="product-details-container">
        <h1>Food Details</h1>
        <div className="container-fluid product-details">
          <h5>Bengali food</h5>
          <div className="row product-image-and-details">
            <div className="col-md-6 product-image-gallery">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
              >
                <SwiperSlide>
                  <img src={Pasta} alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Pasta} alt="..." />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-md-6 product-description">
              <h6>Italian Authentic Pasta</h6>
              <div className={"rating"}>
                <p>Ratings:</p>
                <span>
                  4.5/5
                  <FontAwesomeIcon
                    icon={faStar}
                    className={"mx-1 fa-flip text-danger"}
                  />
                </span>
              </div>
              <div className={"price"}>
                <p>Price</p>
                <span>
                  1000
                  <FontAwesomeIcon
                    icon={faBangladeshiTakaSign}
                    className={"mx-1 fa-fade text-primary"}
                  />
                </span>
              </div>
              <div className={"description"}>
                <p>Description:</p>
                <span>
                  Goat meat, spices, and basmati rice are used to make it.
                  Common variants substitute goat meat . Hyderabad biryani
                  comes in a variety of varieties, where the rice is cooked with
                  marinated goat meat. Goat meat, spices, and basmati rice are
                  used to make it. Common variants substitute goat meat .
                  Hyderabad biryani comes in a variety of varieties, where the
                  rice is cooked with marinated goat meat.
                </span>
              </div>
              <div className={"add-to-cart"}>
                <button>Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
              </div>
            </div>
          </div>
        </div>
        <div className={'container-fluid d-flex justify-content-center align-items-center p-5 '}>
          <img src={bkash} alt={'....'} className={'img-fluid shadow-sm'}/>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
