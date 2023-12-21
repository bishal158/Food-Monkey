
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import 'react-toastify/dist/ReactToastify.css';
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
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";

const registerFormInitialValues = {
    full_name: "",
    phone: "",
    email: "",
    password: "",
};

function Registration (){
    const [viewPassword, setViewPassword] = useState(false);
    const handleShowPassword = () => {
        setViewPassword(!viewPassword);
    };
    const navigator = useNavigate();
    const { values, errors ,touched,isValid, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: registerFormInitialValues,
            validationSchema:registerFormValidation,
            onSubmit(values,action){
                axios.post('http://localhost:5000/api/signup', {
                    full_name: values.full_name,
                    email: values.email,
                    phone: values.phone,
                    password: values.password
                }).then(()=>{
                    navigator('/Login')
                    action.resetForm()
                }).catch(err=>{
                    if (err.response.status === 400){
                        toast.error('User already exist', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                })

            }
        });
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
                        <h4>Food coma? We have got the cure.</h4>
                        <h5>Unlock your delicious destiny. Register now!</h5>
                    </div>
                    <div className={"col-md-6 register-form-field-side"}>
                        <h2>Register Now</h2>
                        <form className={"form"} onSubmit={handleSubmit}>
                        <div className={"form-input"}>
                                <label htmlFor={"full_name"}>
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-user"
                                        className={"mx-1"}
                                    />
                                    Full Name
                                </label>
                                <input
                                    type={"text"}
                                    placeholder={"Enter Your Full Name"}
                                    id={"full_name"}
                                    name="full_name"
                                    value={values.full_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className={'input-errors'}>
                                {errors.full_name && touched.full_name ? (
                                    <p><FontAwesomeIcon icon="fa-solid fa-circle-exclamation"
                                                        className={'mx-1 fa-fade'}/>{errors.full_name}</p>
                                ) : null
                                }
                            </div>
                            <div className={"form-input"}>
                                <label htmlFor={"phone"}>
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-phone"
                                        className={"mx-1"}
                                    />
                                    Phone
                                </label>
                                <input
                                    type={"text"}
                                    placeholder={"Enter Your Phone Number"}
                                    id={"phone"}
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className={'input-errors'}>
                                {errors.phone && touched.phone ? (
                                    <p><FontAwesomeIcon icon="fa-solid fa-circle-exclamation"
                                                        className={'mx-1 fa-fade'}/>{errors.phone}</p>
                                ) : null
                                }
                            </div>
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

                            {/*<div className={"form-input"}>*/}
                            {/*    <label htmlFor={"confirm_password"}>*/}
                            {/*        <FontAwesomeIcon icon="fa-solid fa-lock" className={"mx-1"}/>*/}
                            {/*        Confirm Password*/}
                            {/*    </label>*/}
                            {/*    <input*/}
                            {/*        type={viewPassword ? "text" : "password"}*/}
                            {/*        placeholder={"Confirm Password"}*/}
                            {/*        id={"confirm_password"}*/}
                            {/*        name="confirm_password"*/}
                            {/*        value={values.confirm_password}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        onBlur={handleBlur}*/}
                            {/*    />*/}
                            {/*</div>*/}
                            {/*<div className={'input-errors'}>*/}
                            {/*    {errors.confirm_password && touched.confirm_password ? (*/}
                            {/*        <p><FontAwesomeIcon icon="fa-solid fa-circle-exclamation"*/}
                            {/*                            className={'mx-1 fa-fade'}/>{errors.confirm_password}</p>*/}
                            {/*    ) : null*/}
                            {/*    }*/}
                            {/*</div>*/}
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
            <ToastContainer/>
        </>
    );
}

export default Registration;