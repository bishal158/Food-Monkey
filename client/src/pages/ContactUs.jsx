import "./styles/ContactUs.css";
import { useForm, ValidationError } from "@formspree/react";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";
const ContactUs = () => {
  const { fullName,phone,email } = useContext(UserContext);
  const [state, handleSubmit] = useForm("xnqeapyn");
  if (state.succeeded) {
    return (
      <div
        className={
          "container success-message"
        }
      >
        <h2>Thank You!!</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
        </p>
          <Link to={'/'} className={'go-back'}>Go Home</Link>
      </div>
    );
  }
  return (
    <div className={"contact-us-container"}>
      <h2>Feel free to contact us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.678598263295!2d90.37107177604513!3d23.794456787082268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b13d148d7d%3A0xd119170df705503d!2sNextTech%20Limited!5e0!3m2!1sen!2sbd!4v1702905722522!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={"container m-3"}>
        <form className={"contact-us-form"} onSubmit={handleSubmit}>
          <div className={"contact-us-form-input"}>
            <label>Name</label>
            <input
              type={"text"}
              name="name"
              id="name"
              placeholder="Enter your name"
              value={fullName}
              readOnly={true}
              required
            />
          </div>
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <div className={"contact-us-form-input"}>
            <label>Email</label>
            <input
              type={"email"}
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              readOnly={true}
              required
            />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div className={"contact-us-form-input"}>
            <label>Write Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              className={"p-2"}
              required
            ></textarea>
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type={"submit"} disabled={state.submitting}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
