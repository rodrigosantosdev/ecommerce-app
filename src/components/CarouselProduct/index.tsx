// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";


export default function CarouselProduct() {
    return (
      <div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="../../../images/BANNER---PRODUTOS.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../images/banner-preco-baixo-de-verdade.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
}
