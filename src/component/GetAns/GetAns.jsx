"use client";
import { motion } from "framer-motion";
import "../HeroSection/HeroSection.css";
import img1 from '@/app/assets/answer1.png';
import img2 from '@/app/assets/answer2.png';
import img3 from '@/app/assets/answer3.png';
import Image from "next/image";
import Link from "next/link";
import Portfolio from "../Portfolio/Portfolio";

// Animation Variants
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" }
    })
};

const GetAns = () => {
    return (
        <div className="pt-20 answer-bg">
            <div id="combo-sales" className="max-w-6xl mx-auto">
                <div className="text-center mb-10 flex flex-col gap-4">
                    <h3 className="text-sm md:text-base text-[#0C89FF] tracking-widest">
                        MORE DETAILS
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0A2C8C]">
                        Get Your Answers
                    </h2>
                </div>

                {/* Answer Cards with Framer Motion */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0">
                    {[ 
                        { img: img1, title: "Why Choose Envobyte", subtitle: "Experienced & trustworthy", desc: "We’re experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.", bg: "bg-[#0A2C8C] text-white" },
                        { img: img2, title: "What’s Your Benefit", subtitle: "No hassle with best price", desc: "A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price.", bg: "bg-white text-black" },
                        { img: img3, title: "What is Combo Offer", subtitle: "Get 9 services in one package", desc: "You’re getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!", bg: "bg-white text-black" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className={`p-6 shadow backdrop-blur-md ${item.bg}`}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                        >
                            <Image src={item.img} alt={item.title} width={300} height={200} className="mx-auto" />
                            <h3 className="text-2xl md:text-3xl font-semibold mt-6">{item.title}</h3>
                            <h4 className="text-sm md:text-base font-semibold mt-2 text-[#002AA3]">{item.subtitle}</h4>
                            <p className="text-sm mt-4">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Button */}
                <div className="flex justify-center mt-10">
                    <Link href="">
                        <button className="px-6 md:px-12 py-3 text-white bg-[#FF693B] rounded-lg hover:bg-[#E6592E] transition">
                            See Pricing
                        </button>
                    </Link>
                </div>
            </div>

            {/* Portfolio Section */}
            <div className="pt-20">
                <Portfolio />
            </div>
        </div>
    );
};

export default GetAns;
