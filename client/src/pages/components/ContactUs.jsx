import "./styles/ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ContactUs(){
    return(
        <>
            <div className="container-fluid contact-us">
                <div className="container explore-more">
                    <p> Explore More </p>
                    <div>
                        <h3>Food Monkey Youtube Channel</h3>
                    </div>
                    <button>Subscribe Now <FontAwesomeIcon icon="fa-solid fa-pizza-slice" className="mx-1" /> </button>
                </div>
            </div>
        </>
    )
}

export default ContactUs;