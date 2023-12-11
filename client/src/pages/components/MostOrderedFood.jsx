import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles/MostOrderedFood.css";
import Bangladeshi from "../../assets/images/Bangladeshi.jpg";
import Japaness from "../../assets/images/Japaness.jpg";
import Thai from "../../assets/images/Thai.jpg";
import FastFood from "../../assets/images/FastFood.jpg";
import Chinese from "../../assets/images/Chiness.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBangladeshiTakaSign, faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {useRef} from "react";

const MostOrderedFood = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className={"most-ordered-foods-container"}>
        <h2>Our Most Ordered Foods</h2>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 200,
              modifier: 1,
            }}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
        >
          <SwiperSlide>
            <div className={"most-ordered-foods"}>
              <div className={"most-ordered-food-image"}>
                <img src={Bangladeshi} alt={"...."}/>
              </div>
              <div className={"most-ordered-food-details"}>
                <h5>Kacchi Biryani</h5>
                <p>299<FontAwesomeIcon icon={faBangladeshiTakaSign}/></p>
                <Link to={'/login'} className={'button'}>
                  Order Now
                  <FontAwesomeIcon icon={faCartPlus}/>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"most-ordered-foods"}>
              <div className={"most-ordered-food-image"}>
                <img src={Bangladeshi} alt={"...."}/>
              </div>
              <div className={"most-ordered-food-details"}>
                <h5>Kacchi Biryani</h5>
                <p>299<FontAwesomeIcon icon={faBangladeshiTakaSign}/></p>
                <Link to={'/'} className={'button'}>
                  Order Now
                  <FontAwesomeIcon icon={faCartPlus}/>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"most-ordered-foods"}>
              <div className={"most-ordered-food-image"}>
                <img src={Bangladeshi} alt={"...."}/>
              </div>
              <div className={"most-ordered-food-details"}>
                <h5>Kacchi Biryani</h5>
                <p>299<FontAwesomeIcon icon={faBangladeshiTakaSign}/></p>
                <Link to={'/'} className={'button'}>
                  Order Now
                  <FontAwesomeIcon icon={faCartPlus}/>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"most-ordered-foods"}>
              <div className={"most-ordered-food-image"}>
                <img src={Bangladeshi} alt={"...."}/>
              </div>
              <div className={"most-ordered-food-details"}>
                <h5>Kacchi Biryani</h5>
                <p>299<FontAwesomeIcon icon={faBangladeshiTakaSign}/></p>
                <Link to={'/'} className={'button'}>
                  Order Now
                  <FontAwesomeIcon icon={faCartPlus}/>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"most-ordered-foods"}>
              <div className={"most-ordered-food-image"}>
                <img src={Bangladeshi} alt={"...."}/>
              </div>
              <div className={"most-ordered-food-details"}>
                <h5>Kacchi Biryani</h5>
                <p>299<FontAwesomeIcon icon={faBangladeshiTakaSign}/></p>
                <Link to={'/'} className={'button'}>
                  Order Now
                  <FontAwesomeIcon icon={faCartPlus}/>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"most-ordered-foods"}>
              <div className={"most-ordered-food-image"}>
                <img src={Bangladeshi} alt={"...."}/>
              </div>
              <div className={"most-ordered-food-details"}>
                <h5>Kacchi Biryani</h5>
                <p>299<FontAwesomeIcon icon={faBangladeshiTakaSign}/></p>
                <Link to={'/'} className={'button'}>
                  Order Now
                  <FontAwesomeIcon icon={faCartPlus}/>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"most-ordered-foods"}>
              <div className={"most-ordered-food-image"}>
                <img src={Bangladeshi} alt={"...."}/>
              </div>
              <div className={"most-ordered-food-details"}>
                <h5>Kacchi Biryani</h5>
                <p>299<FontAwesomeIcon icon={faBangladeshiTakaSign}/></p>
                <Link to={'/'} className={'button'}>
                  Order Now
                  <FontAwesomeIcon icon={faCartPlus}/>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"most-ordered-foods"}>
              <div className={"most-ordered-food-image"}>
                <img src={Bangladeshi} alt={"...."}/>
              </div>
              <div className={"most-ordered-food-details"}>
                <h5>Kacchi Biryani</h5>
                <p>299<FontAwesomeIcon icon={faBangladeshiTakaSign}/></p>
                <Link to={'/'} className={'button'}>
                  Order Now
                  <FontAwesomeIcon icon={faCartPlus}/>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"most-ordered-foods"}>
              <div className={"most-ordered-food-image"}>
                <img src={Bangladeshi} alt={"...."}/>
              </div>
              <div className={"most-ordered-food-details"}>
                <h5>Kacchi Biryani</h5>
                <p>299<FontAwesomeIcon icon={faBangladeshiTakaSign}/></p>
                <Link to={'/'} className={'button'}>
                  Order Now
                  <FontAwesomeIcon icon={faCartPlus}/>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default MostOrderedFood;
