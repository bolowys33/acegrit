"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slide from "./Slide";
import Link from "next/link";

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
                    <Slide title="Ace & Grit LP" classes="litigation-image">
                        <p className="mb-10 mx-4 md:mx-24 md:text-xl">
                            Welcome to Ace & Grit Legal Practictioners, where we are
                            dedicated to providing exceptional legal services to
                            our clients. Our team of experienced attorneys is
                            committed to understanding your unique needs and
                            goals, and working tirelessly to achieve the best
                            possible outcomes.
                        </p>
                        <Link
                            href={"/about"}
                            className="transition duration-300 ease-in-out bg-navy hover:bg-transparent hover:border-navy border text-white py-2 px-4 font-semibold uppercase">
                            about us
                        </Link>
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                <Slide title="Expertise" classes="litigation-image">
                        <p className="mb-10 mx-4 md:mx-24 md:text-xl">
                           At Ace & Grit LP, whether you are facing a complex business dispute, navigating the nuances of estate planning, or seeking guidance on a personal legal matter, we are here to support you every step of the way. We invite you to explore our expertise and discover how we can help you succeed
                        </p>
                        <Link
                            href={"/practice-areas"}
                            className="transition duration-300 ease-in-out bg-navy hover:bg-transparent hover:border-navy border text-white py-2 px-4 font-semibold uppercase">
                            learn more
                        </Link>
                    </Slide>
                </SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
