import "swiper/css";
import "swiper/css/pagination";
import "./styles/Promotion.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import promotion_1 from "../../assets/images/promotion/Burgur.jpg";
import promotion from "../../assets/images/promotion/promotion.jpg";
import promotion2 from "../../assets/images/promotion/promotion2.jpg";
import promotion3 from "../../assets/images/promotion/Pizza.jpg";
import { useRef } from "react";
export const Promotion = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className={"container-fluid promotion-container"}>
        <h2>Our best offers!! Order Now!!</h2>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          direction={"horizontal"}
          pagination={{
            clickable: true,
          }}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          modules={[Pagination, Autoplay]}
          className=""
        >
          <SwiperSlide>
            <img src={promotion_1} alt={"..."} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={promotion2} alt={"..."} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={promotion} alt={"..."} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={promotion3} alt={"..."} />
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
