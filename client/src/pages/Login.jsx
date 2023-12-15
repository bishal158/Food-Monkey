import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import "./styles/Login.css";
import Pasta from  '../assets/images/promotion/Pasta.jpg'
import  Burgur from '../assets/images/promotion/Burgur.jpg'
import Pizza from '../assets/images/promotion/Pizza.jpg'
import Soup from '../assets/images/promotion/Soup.jpg'
import Chicken from '../assets/images/promotion/Chicken.jpg'
import Wings from '../assets/images/promotion/Wings.jpg'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCreative, } from "swiper/modules";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function Login() {
  return (
    <>
      <div className={"container-fluid login-form-container"}>
        <div className={"container login-form"}>
          <div className={"col-md-6 login-form-logo-side"}>
            <h1>Welcome To Food Monkey</h1>
            <Swiper
                effect={'creative'}
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
                modules={[EffectCreative,Autoplay]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
            >
              <SwiperSlide>
                <img src={Pasta}  alt={'..'}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Burgur}  alt={'...'}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Pizza}  alt={'..'}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Soup}  alt={'...'}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Chicken}  alt={'..'}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Wings}  alt={'...'}/>
              </SwiperSlide>
            </Swiper>
            <h4>A feast fit for a king.</h4>
            <h5>Login and dig in!</h5>
          </div>
          <div className={"col-md-6 login-form-field-side"}>
            <h2>Login Here</h2>
            <form className={"form"}>
              <div className={"form-input"}>
                <label htmlFor={"email"}><FontAwesomeIcon icon="fa-solid fa-envelope" className={'mx-1'}/>Email</label>
                <input
                  type={"email"}
                  placeholder={"Enter Your Email"}
                  id={"email"}
                  name={"email"}
                />
              </div>
              <div className={"form-input"}>
                <label htmlFor={"password"}><FontAwesomeIcon icon="fa-solid fa-lock" className={'mx-1'} />Password</label>
                <input
                  type={"password"}
                  placeholder={"Enter Your Password"}
                  id={"password"}
                  name={"password"}
                />
              </div>
              <div className={'form-forget-and-show-password'}>
                <Link to={'/forgot-password'} className={'link-info text-decoration-none text-center'}>Forget Password?</Link>
                <button>Show Password <FontAwesomeIcon icon="fa-solid fa-eye" /></button>
              </div>
              <div className={'form-input'}>
                <button type={'submit'}>Login</button>
              </div>
              <div className={'form-input'}>
                <p>Does not have a Account?</p>
                <Link to={'/register'} className={'link-info text-decoration-none text-center'}>Sign Up Here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
