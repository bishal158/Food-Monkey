import "./styles/Banner.css";
import banner_logo from "../../assets/Food Monkey.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons/faCartArrowDown";
function Banner() {
  return (
    <>
      <div className={"container-fluid banner-container"}>
        <div className={"row banner-content"}>
          <div className={"col-md-6 banner-quote"}>
            <h2>
              It's your favorite <q>groceries</q> and <q>meals</q>, delivered.
            </h2>
            <div className={"banner-quote-button"}>
              <h6></h6>
              <Link to={"/"} className={"order-now"}>
                Order Now
                <FontAwesomeIcon icon={faCartArrowDown} className={"icon"} />
              </Link>
            </div>
          </div>
          <div className={"col-md-6 banner-logo"}>
            <img className="img-fluid" src={banner_logo} alt={"banner_logo"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
