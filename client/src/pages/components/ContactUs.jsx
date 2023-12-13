import "./styles/ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ContactUs() {
  return (
    <>
      <div className="container-fluid contact-us">
        <div className="container explore-more">
          <p>
            {" "}
            Explore More{" "}
            <FontAwesomeIcon icon="fa-brands fa-internet-explorer" className={'fa-flip'} />{" "}
          </p>

          <h3>Food Monkey Youtube Channel</h3>

          <button>
            Subscribe Now{" "}
            <FontAwesomeIcon icon="fa-solid fa-pizza-slice" className="mx-1" />{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
