import "swiper/css";
import "swiper/css/pagination";
import "./styles/ProductDetails.css";
import bkash from "../assets/images/promotion/Bkash.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBangladeshiTakaSign,
  faCartPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CartAmountToggle } from "./components/CartAmountToggle.jsx";
import axios from "axios";
import { BASEURL } from "../../config.js";

function ProductDetails() {
  const [amount, setAmount] = useState(1);
  const setIncrease = () => {
    amount < 5 ? setAmount(amount + 1) : setAmount(5);
  };
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${BASEURL}api/getProductDetails/${id}`).then((response) => {
      response.json().then((productDetails) => {
        setProductDetails(productDetails);
      });
    });
  }, []);

  const addToCart = (amount) => {
    console.log(amount);
    axios
      .post(
        `${BASEURL}api/addCartItem`,
        {
          amount: amount,
          foodItemId: productDetails._id,
        },
        { withCredentials: true },
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="product-details-container">
        <h1>Food Details</h1>
        <div className="container-fluid product-details">
          <h5>{productDetails.product_category}</h5>
          <div className="row product-image-and-details">
            <div className="col-md-6 product-image-gallery">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
              >
                <SwiperSlide>
                  <img
                    src={`${BASEURL}` + productDetails.product_image_1}
                    alt="..."
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-md-6 product-description">
              <h6>{productDetails.product_name}</h6>
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
                <p>Price:</p>
                <span>
                  {productDetails.product_price}
                  <FontAwesomeIcon
                    icon={faBangladeshiTakaSign}
                    className={"mx-1 fa-fade text-primary"}
                  />
                </span>
              </div>
              <div className={"description"}>
                <p>Description:</p>
                <span>{productDetails.product_description}</span>
              </div>
              <div className={"add-to-cart"}>
                <CartAmountToggle
                  amount={amount}
                  setDecrease={setDecrease}
                  setIncrease={setIncrease}
                />
                <button onClick={() => addToCart(amount)}>
                  Add to Cart <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "container-fluid d-flex justify-content-center align-items-center p-5 "
          }
        >
          <img src={bkash} alt={"...."} className={"img-fluid shadow-sm"} />
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
