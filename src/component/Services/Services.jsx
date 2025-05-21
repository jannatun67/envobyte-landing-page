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

const Services = () => {
    const [data, setData] = useState([]);
    const [categories] = useState(["Website", "UI/UX", "SEO", "Logo Design", "Banner Design", "Google Ads"]);
    const [activeCategory, setActiveCategory] = useState("Website");
    const [activeNav, setActiveNav] = useState("right");

    const swiperRef = useRef(null);

    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    const filteredData = activeCategory === "All" ? data : data.filter((item) => item.category === activeCategory);

    const handlePrevClick = () => {
        swiperRef.current.swiper.slidePrev();
        setActiveNav("left");
    };

    const handleNextClick = () => {
        swiperRef.current.swiper.slideNext();
        setActiveNav("right");
    };

    return (
        <motion.div
            id="service"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col services-bg py-10 gap-6 text-white px-[3%]"
        >
              <div className="flex flex-col md:flex-row justify-between items-center border-b pb-7 border-[#FFFFFF42]">
            {/* Left Side: Heading and Subheading */}
            <div className="flex flex-col gap-4 text-center md:text-left">
                {/* Subheading */}
                <motion.h3
                    className="text-[#FF693B] uppercase text-sm md:text-[16px] tracking-widest"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Digital services
                </motion.h3>

                {/* Main Heading */}
                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Check Our Available Services
                </motion.h2>
            </div>

            {/* Right Side: Button */}
            <motion.div
                className="mt-6 md:mt-0"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
            >
                <button
                    onClick={() => setActiveCategory("All")}
                    className="px-8 py-3 cursor-pointer text-white bg-[#FF693B] rounded hover:bg-[#FF693B]/90 transition"
                >
                    All Services
                </button>
            </motion.div>
        </div>

            <div>
                <div className=" mx-auto">
                    {/* Category Tabs */}
                    <motion.div
                        className="flex flex-wrap gap-4 mb-6"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                className={`py-2 uppercase rounded-lg cursor-pointer transition ${activeCategory === category ? "text-[#0C89FF]" : "text-white"}`}
                                onClick={() => setActiveCategory(category)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Swiper Slider */}
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"

                        ref={swiperRef}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 15 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                        }}
                    >
                        {filteredData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <motion.div
                                    className="bg-[#3158C733]  transition p-10 gap-2 flex justify-center flex-col items-center border border-[#FFFFFF42] bg-opacity-20 rounded-lg shadow-lg text-white"
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true }} 
                                    
                                >
                                    <img src={item.image} alt={item.title} className="h-[150px] rounded-lg" />
                                    <h3 className="text-2xl font-bold mt-3">{item.title}</h3>
                                    <p className="text-[16px]">{item.subTitle}</p>
                                    <div className="flex gap-2 mt-6 justify-center items-center">
                                        <Link className="btn rounded-full bg-[#0C89FF] px-10 py-2" href="#">
                                            <button>Portfolio</button>
                                        </Link>
                                        <Link className="btn rounded-full border-[#0C89FF] text-[#0C89FF] border px-10 py-2" href="#">
                                            <button>Order</button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <div className="flex justify-center gap-6 mt-6">
                        <motion.button
                            onClick={handlePrevClick}
                            className={`px-3 py-2 rounded hover:bg-[#FF693B] hover:text-white transition ${activeNav === "left" ? " bg-[#FF693B] text-white " : "border-[#0C89FF] border text-[#0C89FF] "}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <MdKeyboardArrowLeft />
                        </motion.button>
                        <motion.button
                            onClick={handleNextClick}
                            className={`px-3 py-2 rounded hover:bg-[#FF693B] hover:text-white transition ${activeNav === "right" ? " bg-[#FF693B] text-white " : "border-[#0C89FF] border text-[#0C89FF] "}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <MdOutlineKeyboardArrowRight />
                        </motion.button>
                    </div>
                </div>
            </div>
           <Separator textColor='white'></Separator>
        </motion.div>
    );
};

export default Services;
