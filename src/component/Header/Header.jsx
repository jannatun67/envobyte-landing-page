"use client";

import { useState, useEffect, useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/app/assets/logo.png";

const sections = ["home", "service", "combo-sales", "portfolio", "about-us", "blog"];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100;
    setIsScrolled(window.scrollY > 50);

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed py-2 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A2C8C] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-[3%] sm:px-6 lg:px-[2%] flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer">
          <Image src={logo} alt="Logo" width={180} height={38} priority />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              className={`cursor-pointer capitalize hover:text-[#FF693B] transition-colors ${
                activeSection === section ? "text-[#FF693B] font-semibold" : "text-white"
              }`}
            >
              {section.replace("-", " ")}
            </ScrollLink>
          ))}
        </div>

        {/* Pricing Button */}
        <div className="hidden md:block">
          <ScrollLink to="pricing" smooth={true} duration={500} offset={-80}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-20 cursor-pointer py-3 text-white bg-[#FF693B] rounded hover:bg-opacity-80 transition"
            >
              See Pricing
            </motion.button>
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white shadow-md absolute w-full"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              {sections.map((section) => (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`cursor-pointer capitalize hover:text-purple-600 transition-colors ${
                    activeSection === section ? "text-[#FF693B] font-semibold" : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {section.replace("-", " ")}
                </ScrollLink>
              ))}
              <ScrollLink to="pricing" smooth={true} duration={500} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-20 cursor-pointer py-3 text-white bg-[#FF693B] rounded-lg hover:bg-opacity-80 transition"
                  onClick={() => setIsOpen(false)}
                >
                  See Pricing
                </motion.button>
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;