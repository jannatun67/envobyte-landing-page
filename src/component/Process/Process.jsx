"use client";
import Image from "next/image";
import processImg from "@/app/assets/process.png";
import separator from "@/app/assets/Separator.png";
import { motion } from "framer-motion";

const Process = () => {
  return (
    <div className="flex flex-col process-bg py-10 gap-6 text-white px-[3%]">
      <section className="relative text-white py-16 px-6">
        {/* Background Overlay */}
        <motion.div
          className="absolute inset-0 opacity-50 z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}  // Animation triggers when section is in view
          transition={{ duration: .5 }}
        ></motion.div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center flex flex-col justify-between items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}  // Animation triggers when section is in view
          transition={{ duration: .5, delay: 0.1 }}
        >
           <motion.h4
                className="text-lg md:text-xl uppercase tracking-widest"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }} // Animation triggers when section is in view
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }} // Ensures animation only triggers once
            >
                How We Work
            </motion.h4>

            {/* Main Heading */}
            <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold my-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }} // Animation triggers when section is in view
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }} // Ensures animation only triggers once
            >
                Our Process For Delivering <br /> Results
            </motion.h2>

            {/* Description */}
            <motion.p
                className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} // Animation triggers when section is in view
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }} // Ensures animation only triggers once
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                standard dummy text ever.
            </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}  // Animation triggers when section is in view
            transition={{ duration: 0.5, delay: .4 }}
          >
            <Image  src={processImg} alt="process-img" />
          </motion.div>

          {/* Separator Animation */}
          <motion.div
            className="absolute top-52 -right-20 rotate-270 hidden lg:flex"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}  // Animation triggers when section is in view
            transition={{ duration: 0.5, delay: .4 }}
          >
            <div className="flex justify-end items-center gap-4">
              <Image src={separator} alt="separator" width={100} height={1} />
              <h3 className="tracking-widest uppercase text-[14px]">Project in steps</h3>
            </div>
          </motion.div>
        </motion.div>

        {/* Button Animation */}
        <motion.div
          className="relative text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}  // Animation triggers when section is in view
          transition={{ duration: 0.5, delay: .6 }}
        >
          <motion.button            
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            
            className="bg-[#FF693B] cursor-pointer hover:[#FF693B] text-white px-18 py-3 rounded font-bold"
          >
            Contact Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Process;
