"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../shared/Button/Button";
import bgImg from "@/app/assets/logo.png";
import logo1 from "@/app/assets/web.png";
import logo2 from "@/app/assets/like.png";
import logo3 from "@/app/assets/groupe.png";
import logo4 from "@/app/assets/man.png";
import heroImg from "@/app/assets/hero-img.png";
import "./HeroSection.css";
import Image from "next/image";

const stats = [
    { logo: logo1, value: 2000, label: "Websites Built" },
    { logo: logo2, value: 97, label: "Client Satisfaction" },
    { logo: logo3, value: 25, label: "Team Members" },
    { logo: logo4, value: 500, label: "Amazing Clients" },
];

const Counter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;
        const duration = 2000;
        const increment = end / (duration / 30);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 30);
        return () => clearInterval(timer);
    }, [value]);

    return <span>{count}+</span>;
};

const HeroSection = () => {
    return (
        <motion.div id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col hero-bg justify-center items-center text-center gap-6 px-4 md:px-8 lg:px-12 pt-32 md:pt-40 lg:pt-64 pb-16 md:pb-20 text-white"
        >
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl tracking-wide uppercase mb-4">Digital Services</h1>
                <h4 className="text-base md:text-lg lg:text-xl uppercase font-bold">Building your empire digitally</h4>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="flex flex-col md:flex-row gap-3 md:gap-6 mt-4 justify-center items-center">
                <motion.button whileHover={{ scale: 1.03, backgroundColor: "#FF693B" }} transition={{ duration: 0.3 }} className=" lg:px-20 cursor-pointer lg:py-4 px-12 py-3  uppercase  text-white bg-[#FF693B] rounded hover:bg-[#FF693B] transition">
                    See Pricing
                </motion.button>
                <motion.button whileHover={{ scale: 1.03, backgroundColor: "#FF693B" }} transition={{ duration: 0.3 }} className="border uppercase cursor-pointer px-5 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 border-white rounded-lg text-white hover:border-[#FF693B] transition">
                    Book an appointment
                </motion.button>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mt-10 w-full max-w-7xl">
                {stats.map((item, index) => (
                    <motion.div key={index} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: index * 0.2 }} className={`flex items-center ${index < 3 ? "border-r border-[#FFFFFF80]" : "border-r border-[#FFFFFF80] lg:border-0"} pr-4 md:pr-6 lg:pr-8`}>
                        <div className="w-14 h-14 flex justify-center items-center border rounded-md">
                            <Image src={item.logo} alt="Logo" width={28} height={28} className="w-7 h-7" />
                        </div>
                        <div className="ml-4 text-left">
                            <h2 className="text-xl md:text-2xl font-bold text-white"><Counter value={item.value} /></h2>
                            <p className="text-sm md:text-lg text-white">{item.label}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="mt-12 md:mt-16 lg:mt-20 w-full flex justify-center">
                <Image src={heroImg} alt="hero-img" width={800} height={450} className="max-w-full h-auto" />
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;
