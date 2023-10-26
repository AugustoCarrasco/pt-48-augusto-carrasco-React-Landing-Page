import React, { useState } from "react";
import Details from ".//Details";
import Fullbody from ".//Fullbody";
import "./Catalog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const Catalog = ({ clothes }) => {

  const [detailsShown, setDetailsShow] = useState(null);
  const [detailsWear, setDetailsWear] = useState(null);
  const selectCard = (wear) => {
    setDetailsShow(true);
    setDetailsWear(wear);
  };
    
  return (
    <>
      <div className="catalog__container">
        <Swiper
          modules={[FreeMode, Navigation]}
          freeMode={true}
          navigation={{ clickable: true }}
          loop={true}
          spaceBetween={50}
          slidesPerView={5}
        >
          {clothes.map((wear) => (
            <div>
              <SwiperSlide key={wear.id}>
                <div
                  className="catalog-card"
                  key={wear.id}
                  style={{ backgroundColor: wear.cardColor }}
                  onClick={() => selectCard(wear)}
                >
                  <img
                    src={wear.clothImgUri}
                    alt="wear-picture"
                    className="catalog-card-image"
                  />
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        {detailsShown && <Details wear={detailsWear} />}
        {detailsShown && <Fullbody wear={detailsWear} />}
      </div>
    </>
  );
};

export default Catalog;
