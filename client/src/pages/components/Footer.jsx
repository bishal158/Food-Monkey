import logo from "../../assets/favicon/favicon.ico";
import Visa from "../../assets/images/payments/Visa.png";
import AmericanExpress from "../../assets/images/payments/AmericanExpress.png";
import MasterCard from "../../assets/images/payments/MasterCard.png";
import Bkash from "../../assets/images/payments/Bkash.png";
import Rocket from "../../assets/images/payments/Rocket.png";
import Nagad from "../../assets/images/payments/Nagad.png";
import Upay from "../../assets/images/payments/Upay.png";
import "./styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className={"footer-container"}>
        <div className={"footer-quote"}>
          <img src={logo} className={"fa-flip"} alt={".."} />
          <h1>
            Flavors at your fingertips, with every tap, your cravings eclipse!
          </h1>
        </div>
        <div className={"branches"}>
          <h3>Our Branches</h3>
          <div className={"branch"}>
            <div className={"branch-card"}>
              <h4>Dhaka</h4>
              <address>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  78, senpara,Mirpur-10, Dhaka-1216
                </p>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-phone" />
                  01798541625
                </p>
              </address>
              <div className={"social-links"}>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-facebook"
                    className={"fa-2xl fa-fade link-primary "}
                  />
                </Link>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-twitter"
                    className={"fa-2xl fa-flip link-dark "}
                  />
                </Link>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-instagram"
                    className={"fa-2xl fa-fade link-info"}
                  />
                </Link>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-youtube"
                    className={"fa-2xl fa-bounce link-danger"}
                  />
                </Link>
              </div>
            </div>
            <div className={"branch-card"}>
              <h4>Dhaka</h4>
              <address>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  78, senpara,Mirpur-10, Dhaka-1216
                </p>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-phone" />
                  01798541625
                </p>
              </address>
              <div className={"social-links"}>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-facebook"
                    className={"fa-2xl fa-fade link-primary "}
                  />
                </Link>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-twitter"
                    className={"fa-2xl fa-flip link-dark "}
                  />
                </Link>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-instagram"
                    className={"fa-2xl fa-fade link-info"}
                  />
                </Link>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-youtube"
                    className={"fa-2xl fa-bounce link-danger"}
                  />
                </Link>
              </div>
            </div>
            <div className={"branch-card"}>
              <h4>Dhaka</h4>
              <address>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  78, senpara,Mirpur-10, Dhaka-1216
                </p>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-phone" />
                  01798541625
                </p>
              </address>
              <div className={"social-links"}>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-facebook"
                    className={"fa-2xl fa-fade link-primary "}
                  />
                </Link>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-twitter"
                    className={"fa-2xl fa-flip link-dark "}
                  />
                </Link>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-instagram"
                    className={"fa-2xl fa-fade link-info"}
                  />
                </Link>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-youtube"
                    className={"fa-2xl fa-bounce link-danger"}
                  />
                </Link>
              </div>
            </div>
            <div className={"branch-card"}>
              <h4>Dhaka</h4>
              <address>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  78, senpara,Mirpur-10, Dhaka-1216
                </p>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-phone" />
                  01798541625
                </p>
              </address>
              <div className={"social-links"}>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-facebook"
                    className={"fa-2xl fa-fade link-primary "}
                  />
                </Link>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-twitter"
                    className={"fa-2xl fa-flip link-dark "}
                  />
                </Link>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-instagram"
                    className={"fa-2xl fa-fade link-info"}
                  />
                </Link>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon="fa-brands fa-youtube"
                    className={"fa-2xl fa-bounce link-danger"}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={"payment-partners"}>
            <h3>Payment Partners</h3>
            <div className={"partners"}>
              <div className={"partner"}>
                <img src={Visa} alt={"..."} />
              </div>
              <div className={"partner"}>
                <img src={MasterCard} alt={"..."} />
              </div>
              <div className={"partner"}>
                <img src={AmericanExpress} alt={"..."} />
              </div>
              <div className={"partner"}>
                <img src={Bkash} alt={"..."} />
              </div>
              <div className={"partner"}>
                <img src={Nagad} alt={"..."} />
              </div>
              <div className={"partner"}>
                <img src={Rocket} alt={"..."} />
              </div>
              <div className={"partner"}>
                <img src={Upay} alt={"..."} />
              </div>
            </div>
          </div>
          <div className={"information"}>
            <h4>More Information</h4>
            <div className={"infos"}>
              <Link to={"/"} className={'info'}>About Us</Link>
              <Link to={"/"} className={'info'}>Terms and Condition</Link>
              <Link to={"/"} className={'info'}>Privacy Policy</Link>
            </div>
            <h5 className={'copy-right'}><FontAwesomeIcon icon="fa-solid fa-copyright" />2023 Copyright: MentorMind.com</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
