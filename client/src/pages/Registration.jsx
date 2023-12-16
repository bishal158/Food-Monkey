import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "./styles/Register.css";
import {useState} from "react";
import {useFormik} from "formik";
import {registerFormValidation} from "../validators/FormValidation.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCreative} from "swiper/modules";
import Pasta from "../assets/images/promotion/Pasta.jpg";
import Burgur from "../assets/images/promotion/Burgur.jpg";
import Pizza from "../assets/images/promotion/Pizza.jpg";
import Soup from "../assets/images/promotion/Soup.jpg";
import Chicken from "../assets/images/promotion/Chicken.jpg";
import Wings from "../assets/images/promotion/Wings.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const registerFormInitialValues = {
    email: "",
    password: "",
    confirm_password: "",
};

function Registration (){
    const [viewPassword, setViewPassword] = useState(false);
    const handleShowPassword = () => {
        setViewPassword(!viewPassword);
    };
    const { values, errors ,touched,isValid, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: registerFormInitialValues,
            validationSchema:registerFormValidation,
            onSubmit(values,action){
                console.log(values)
                action.resetForm()
            }
        });
    console.log(isValid)
    return (
        <>
            <div className={"container-fluid register-form-container"}>
                <div className={"container register-form"}>
                    <div className={"col-md-6 register-form-logo-side"}>
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
                    <div className={"col-md-6 register-form-field-side"}>
                        <h2>Register Now</h2>
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
                            <div className={'input-errors'}>
                                {errors.email && touched.email ? (
                                    <p><FontAwesomeIcon icon="fa-solid fa-circle-exclamation"
                                                        className={'mx-1 fa-fade'}/>{errors.email}</p>
                                ) : null
                                }
                            </div>
                            <div className={"form-input"}>
                                <label htmlFor={"password"}>
                                    <FontAwesomeIcon icon="fa-solid fa-lock" className={"mx-1"}/>
                                    Password
                                </label>
                                <input
                                    type={viewPassword ? "text" : "password"}
                                    placeholder={"Enter Your Password"}
                                    id={"password"}
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className={'input-errors'}>
                                {errors.password && touched.password ? (
                                    <p><FontAwesomeIcon icon="fa-solid fa-circle-exclamation"
                                                        className={'mx-1 fa-fade'}/>{errors.password}</p>
                                ) : null
                                }
                            </div>

                            <div className={"form-input"}>
                                <label htmlFor={"confirm_password"}>
                                    <FontAwesomeIcon icon="fa-solid fa-lock" className={"mx-1"}/>
                                    Confirm Password
                                </label>
                                <input
                                    type={viewPassword ? "text" : "password"}
                                    placeholder={"Confirm Password"}
                                    id={"confirm_password"}
                                    name="confirm_password"
                                    value={values.confirm_password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className={'input-errors'}>
                                {errors.confirm_password && touched.confirm_password ? (
                                    <p><FontAwesomeIcon icon="fa-solid fa-circle-exclamation"
                                                        className={'mx-1 fa-fade'}/>{errors.confirm_password}</p>
                                ) : null
                                }
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
                                {!viewPassword && (
                                    <label onClick={handleShowPassword}>
                                        Show Password <FontAwesomeIcon icon="fa-solid fa-eye"/>
                                    </label>
                                )}
                                {viewPassword && (
                                    <label onClick={handleShowPassword}>
                                        Hide Password
                                        <FontAwesomeIcon icon="fa-solid fa-eye-slash"/>
                                    </label>
                                )}
                            </div>
                            <div className={"form-input"}>
                                {isValid ? (
                                    <button type={"submit"}>Register</button>
                                ) : <button type={"submit"}>Not Valid</button>}
                            </div>
                            <div className={"form-input"}>
                                <p>Already have an Account?</p>
                                <Link
                                    to={"/login"}
                                    className={
                                        "link-info fw-bold text-decoration-none text-center "
                                    }
                                >
                                    Log in Now
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration;