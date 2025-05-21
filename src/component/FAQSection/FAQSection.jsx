"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "What Is Included In Your Web Development Service?",
            answer: "Our web development service includes custom website design, responsive development, backend integration, and deployment. We ensure your website is fully functional and optimized for performance.",
        },
        {
            question: "What Technologies Do You Use For Web Development?",
            answer: "We use modern technologies such as WordPress, HTML5, CSS3, JavaScript, PHP, and MySQL to ensure your website is scalable, secure, and responsive.",
        },
        {
            question: "What If I Need Ongoing Support After The Website Is Launched?",
            answer: "We offer ongoing support and maintenance packages to help you with updates, security patches, and any issues that may arise after your website is launched.",
        },
        {
            question: "Can I Customize My Website According To My Business Needs?",
            answer: "Yes, we provide fully customizable solutions tailored to your specific business requirements. Our team works closely with you to ensure the website meets your needs.",
        },
        {
            question: "Do You Offer SEO Services As Part Of Your Web Development?",
            answer: "Yes, we offer SEO services as part of our web development packages to help your website rank higher in search engine results and attract more organic traffic.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-white">
            <motion.section
                className="py-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#0A2C8C]">
                        Frequently Asked Questions
                    </h2>
                    <div className="mt-10 max-w-4xl mx-auto">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white border-b border-[#33333327] ${
                                    faqData.length === index + 1 ? "border-b-0" : ""
                                }`}
                            >
                                <motion.button
                                    className="w-full cursor-pointer text-left p-6 flex justify-between items-center"
                                    onClick={() => toggleFAQ(index)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div
                                        className={`text-lg md:text-2xl font-semibold flex gap-4 md:gap-6 ${
                                            activeIndex === index
                                                ? "text-[#0A2C8C]"
                                                : "text-[#6D758F]"
                                        }`}
                                    >
                                        <span>0{index + 1}</span>
                                        {faq.question}
                                    </div>
                                    <span className="text-sm text-[#6D758F]">
                                        {activeIndex === index ? (
                                            <IoClose />
                                        ) : (
                                            <FaPlus />
                                        )}
                                    </span>
                                </motion.button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 ml-12">
                                                <p className="text-[#6D758F] text-lg md:text-2xl">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default FAQSection;
