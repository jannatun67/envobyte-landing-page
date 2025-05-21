"use client";
import "../HeroSection/HeroSection.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import Separator from "../shared/Separator/Separator";
import SectionTitle from "../shared/SectionTitle/SectionTitle";

const Team = () => {
    const [data, setData] = useState([]);
    const [activeNav, setActiveNav] = useState("right");

    const swiperRef = useRef(null);

    useEffect(() => {
        fetch("/team.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    const handlePrevClick = () => {
        swiperRef.current.swiper.slidePrev();
        setActiveNav("left");
    };

    const handleNextClick = () => {
        swiperRef.current.swiper.slideNext();
        setActiveNav("right");
    };

    return (
        <div className="bg-white">
            <motion.div
            id="about-us"
            className="flex flex-col py-10 gap-6 text-white px-[3%] container mx-auto"
        >
            <SectionTitle title='Our Team Members' subTitle='EXPERIENCED TEAM'></SectionTitle>

            <div>
                <div className="mx-auto">
                    {/* Swiper Slider */}
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={1}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"
                        ref={swiperRef}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 15 },
                            1024: { slidesPerView: 4, spaceBetween: 1 },
                        }}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <motion.div
                                    className="bg-white cursor-grab relative border-dotted border border-[#333] overflow-hidden shadow-lg"
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="bg-[#0A2C8C] absolute bottom-0 right-0 left-0 p-4">
                                        <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                        <p className="text-sm text-white">{item.role}</p>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <div className="flex justify-center gap-6 mt-6">
                        <motion.button
                            onClick={handlePrevClick}
                            className={`px-3 py-2 cursor-pointer rounded hover:bg-[#FF693B] hover:text-white transition ${activeNav === "left" ? " bg-[#FF693B] text-white " : "border-[#0C89FF] border text-[#0C89FF] "}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <MdKeyboardArrowLeft />
                        </motion.button>
                        <motion.button
                            onClick={handleNextClick}
                            className={`px-3 py-2 rounded cursor-pointer hover:bg-[#FF693B] hover:text-white transition ${activeNav === "right" ? " bg-[#FF693B] text-white " : "border-[#0C89FF] border text-[#0C89FF] "}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <MdOutlineKeyboardArrowRight />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
        </div>
    );
};

export default Team;