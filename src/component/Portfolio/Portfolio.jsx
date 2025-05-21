"use client";
import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import Separator from "../shared/Separator/Separator";

const Portfolio = () => {
    const [data, setData] = useState([]);
    const [categories] = useState([
        "UI/UX", "Website", "SEO", "Logo Design", "Banner Design", "Google Ads"
    ]);
    const [activeCategory, setActiveCategory] = useState("UI/UX");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activePagination, setActivePagination] = useState('right');
    const itemsPerPage = 8;

    useEffect(() => {
        fetch("/portfolio.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    // Filter data by active category
    const filteredData = activeCategory === "Alls" ? data : data.filter((item) => item.category === activeCategory);

    // Paginate data
    const paginatedData = filteredData.slice(currentIndex, currentIndex + itemsPerPage);

    // Handle Prev Click
    const handlePrevClick = () => {
        setActivePagination('left');
        if (currentIndex === 0) {
            setCurrentIndex(Math.max(filteredData.length - itemsPerPage, 0)); // Go to last page
        } else {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    // Handle Next Click
    const handleNextClick = () => {
        setActivePagination('right');
        if (currentIndex + itemsPerPage >= filteredData.length) {
            setCurrentIndex(0); // Reset to first page
        } else {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    return (
        <motion.div
            id="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:py-10 pb-32 gap-6 text-white"
        >
            <motion.div
                className="flex flex-col md:flex-row justify-between items-center mx-[3%] border-b pb-7 border-[#33333329]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Left Side: Heading and Subheading */}
                <div className="flex flex-col gap-4 text-center md:text-left">
                    {/* Subheading */}
                    <h3 className="text-[#0C89FF] uppercase text-sm md:text-[16px] tracking-widest">
                        UI/UX Portfolio
                    </h3>

                    {/* Main Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001246] font-bold tracking-wide">
                        Check Our Previous Work
                    </h2>
                </div>

                {/* Right Side: Button */}
                <div className="mt-6 md:mt-0">
                    <button
                        onClick={() => setActiveCategory("Alls")}
                        className="px-8 py-3 text-white bg-[#FF693B] rounded hover:bg-[#FF693B]/90 transition"
                    >
                        All Portfolio
                    </button>
                </div>
            </motion.div>

            <div className="flex flex-wrap gap-4 mb-6 px-[3%]">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        className={`py-2 px-3 cursor-pointer uppercase rounded-lg transition ${activeCategory === category ? "text-[#0C89FF]" : "text-[#474747]"}`}
                        onClick={() => {
                            setActiveCategory(category);
                            setCurrentIndex(0);
                        }}
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {paginatedData.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="shadow-lg text-white w-full mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
                    >
                        <img src={item.image} alt={item.title} className="object-cover w-full rounded-lg" />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="flex justify-center gap-4 mt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.button
                    onClick={handlePrevClick}
                    className={`px-3 cursor-pointer py-2 font-bold text-xl rounded transition hover:bg-[#FF693B] hover:text-white border-[#0C89FF] border text-[#0C89FF] ${activePagination === "left" ? "bg-[#FF693B] border-0 text-white" : ""}`}
                >
                    <MdKeyboardArrowLeft />
                </motion.button>
                <motion.button
                    onClick={handleNextClick}
                    className={`px-3 py-2 cursor-pointer font-bold text-xl rounded transition hover:bg-[#FF693B] hover:text-white border-[#0C89FF] border text-[#0C89FF] ${activePagination === "right" ? "bg-[#FF693B] border-0 text-white" : ""}`}
                >
                    <MdOutlineKeyboardArrowRight />
                </motion.button>
            </motion.div>

            <div className="mr-[3%] -mt-10">
                <Separator text="creative portfolio" textColor="black" />
            </div>
        </motion.div>
    );
};

export default Portfolio;
