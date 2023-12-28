import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "./styles/Login.css";
import Pasta from "../assets/images/promotion/Pasta.jpg";
import Burgur from "../assets/images/promotion/Burgur.jpg";
import Pizza from "../assets/images/promotion/Pizza.jpg";
import Soup from "../assets/images/promotion/Soup.jpg";
import Chicken from "../assets/images/promotion/Chicken.jpg";
import Wings from "../assets/images/promotion/Wings.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import { json, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import { loginFormValidation } from "../validators/FormValidation.jsx";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../context/UserContext.jsx";
import { BASEURL } from "../../config.js";

const loginFormInitialValues = {
  email: "",
  password: "",
};

function Login() {
  const {
    fullName,
    setFullname,
    phone,
    setPhone,
    email,
    setEmail,
    isAdmin,
    setIsAdmin,
  } = useContext(UserContext);
  const navigator = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: loginFormInitialValues,
    validationSchema: loginFormValidation,
    async onSubmit(values, action) {
      const response = await fetch(`${BASEURL}api/login`, {
        method: "POST",
        body: JSON.stringify({ ...values }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((response) => {
          response.json().then((userInfo) => {
            setEmail(userInfo.email);
            setPhone(userInfo.phone);
            setFullname(userInfo.full_name);
            if (userInfo.email === "admin@gmail.com") {
              setIsAdmin(true);
            }
          });
          navigator("/");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });
  console.log(isAdmin);
  return (
    <>
      <div className={"container-fluid login-form-container"}>
        <div className={"container login-form"}>
          <div className={"col-md-6 login-form-logo-side"}>
            <h1>Welcome To Food Monkey</h1>
            <Swiper
              effect={"creative"}
              grabCursor={true}
              creativeEffect={{
                prev: {
                  rotate: [0, 0, -90],
                },
                next: {
                  rotate: [0, 0, 90],
                },
              }}
              pagination={true}
              modules={[EffectCreative, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide>
                <img src={Pasta} alt={".."} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Burgur} alt={"..."} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Pizza} alt={".."} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Soup} alt={"..."} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Chicken} alt={".."} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Wings} alt={"..."} />
              </SwiperSlide>
            </Swiper>
            <h4>A feast fit for a king.</h4>
            <h5>Login and dig in!</h5>
          </div>
          <div className={"col-md-6 login-form-field-side"}>
            <h2>Login Here</h2>
            <form className={"form"} onSubmit={handleSubmit}>
              <div className={"form-input"}>
                <label htmlFor={"email"}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-envelope"
                    className={"mx-1"}
                  />
                  Email
                </label>
                <input
                  type={"email"}
                  placeholder={"Enter Your Email"}
                  id={"email"}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className={"input-errors"}>
                {errors.email && touched.email ? (
                  <p>
                    <FontAwesomeIcon
                      icon="fa-solid fa-circle-exclamation"
                      className={"mx-1 fa-fade"}
                    />
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div className={"form-input"}>
                <label htmlFor={"password"}>
                  <FontAwesomeIcon icon="fa-solid fa-lock" className={"mx-1"} />
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={"Enter Your Password"}
                  id={"password"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className={"input-errors"}>
                {errors.password && touched.password ? (
                  <p>
                    <FontAwesomeIcon
                      icon="fa-solid fa-circle-exclamation"
                      className={"mx-1 fa-fade"}
                    />
                    {errors.password}
                  </p>
                ) : null}
              </div>
              <div className={"form-forget-and-show-password"}>
                <Link
                  to={"/forgot-password"}
                  className={
                    "link-info fw-bold text-decoration-none text-center"
                  }
                >
                  Forget Password?
                </Link>
                {!showPassword && (
                  <label onClick={handleShowPassword}>
                    Show Password <FontAwesomeIcon icon="fa-solid fa-eye" />
                  </label>
                )}
                {showPassword && (
                  <label onClick={handleShowPassword}>
                    Hide Password{" "}
                    <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
                  </label>
                )}
              </div>
              <div className={"form-input"}>
                {isValid ? (
                  <button type={"submit"}>Login</button>
                ) : (
                  <button type={"submit"}>Not Valid</button>
                )}
              </div>
              <div className={"form-input"}>
                <p>Does not have a Account?</p>
                <Link
                  to={"/register"}
                  className={
                    "link-info fw-bold text-decoration-none text-center "
                  }
                >
                  Sign Up Here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
