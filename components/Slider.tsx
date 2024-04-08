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
                        <p className="mb-10 mx-4 md:mx-24 text-sm md:text-xl">
                            Welcome to Ace & Grit Legal Practictioners, where we
                            are dedicated to providing exceptional legal
                            services to our clients. Our team of experienced
                            attorneys is committed to understanding your unique
                            needs and goals, and working tirelessly to achieve
                            the best possible outcomes.
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
                        <p className="mb-10 mx-4 md:mx-24 text-sm md:text-xl">
                            At Ace & Grit LP, whether you are facing a complex
                            business dispute, navigating the nuances of estate
                            planning, or seeking guidance on a personal legal
                            matter, we are here to support you every step of the
                            way. We invite you to explore our expertise and
                            discover how we can help you succeed
                        </p>
                        <Link
                            href={"/practice-areas"}
                            className="transition duration-300 ease-in-out bg-navy hover:bg-transparent hover:border-navy border text-white py-2 px-4 font-semibold uppercase">
                            learn more
                        </Link>
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide title="Our Blog" classes="litigation-image">
                        <p className="mb-10 mx-4 md:mx-24 text-sm md:text-xl">
                            Stay informed and empowered with our latest
                            articles, insights, and legal tips. Whether you're a
                            business owner, individual, or legal professional,
                            our blog covers a wide range of topics to help you
                            navigate the complexities of the law. Explore our
                            blog to learn about recent legal developments,
                            industry trends, and practical advice to protect
                            your rights and interests.
                        </p>
                        <Link
                            href={"/legal-blog"}
                            className="transition duration-300 ease-in-out bg-navy hover:bg-transparent hover:border-navy border text-white py-2 px-4 font-semibold uppercase">
                            explore blog
                        </Link>
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide title="Get in Touch" classes="litigation-image">
                        <p className="mb-10 mx-4 md:mx-24 text-sm md:text-xl">
                            Ready to discuss your legal needs? Contact us today
                            to schedule a consultation. Our team is here to
                            listen, advise, and guide you through the legal
                            process. Whether you have questions about a specific
                            legal matter or need representation in court, we are
                            committed to providing personalized attention and
                            tailored solutions to meet your needs. Don't
                            hesitate to reach out - we're here to help.
                        </p>
                        <Link
                            href={"/contact-us"}
                            className="transition duration-300 ease-in-out bg-navy hover:bg-transparent hover:border-navy border text-white py-2 px-4 font-semibold uppercase">
                            Schedule consultaion
                        </Link>
                    </Slide>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
