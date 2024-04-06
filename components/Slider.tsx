"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PageBanner from "./PageBanner";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 5000, 
                    disableOnInteraction: false, 
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}>
                <SwiperSlide>
                    <PageBanner classes="" title="home" />
                </SwiperSlide>
                <SwiperSlide>
                    <PageBanner classes="" title="home 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <PageBanner classes="" title="home 3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
