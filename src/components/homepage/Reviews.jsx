import React from "react";
// Images
import Review1 from "../../assets/Review1.png";
import Review2 from "../../assets/Review2.png";
import Review3 from "../../assets/Review3.png";
// Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reviews = () => {
  return (
    <section>
      <div>
        <div>
          <h3></h3>
          <p></p>
        </div>
        <div>
          <button></button>
        </div>
      </div>
      <div>
      <h3 className="text-center text-4xl py-2 font-bold">REVIEWS</h3>
      </div>
      
      <div className="flex">
        
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            {" "}
            <img src={Review1} alt="" className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Review2} alt="" className="m-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Review3} alt="" className="m-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
