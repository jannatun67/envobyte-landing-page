"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { TiArrowRight } from "react-icons/ti";
import email from '@/app/assets/whatsapp.png'
import whatsapp from '@/app/assets/whatsapp-1.png'
import linkdin from '@/app/assets/linkedn.png'
import Link from "next/link";
import Footer from "../Footer/Footer";
import check from '../../app/assets/check.png'

const ContactSection = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        // You can send the form data to your backend or API here
    };

    return (
        <section className="lg:pt-40 pt-20 contact-bg border-b  ">
            <div className=" border-b  border-white">
                <div className="max-w-6xl mx-auto  ">
                    {/* Section Title */}
                   

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-6 ">
                        {/* Left Side: Contact Form */}
                        <motion.div
                            className=" order-2 lg:order-1  p-8 rounded-lg border border-[#e1e4ed3e] "
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-6 space-x-8 grid grid-cols-1 lg:grid-cols-2 ">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">
                                            Name
                                        </label>
                                        <Controller
                                            name="name"
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: "Name is required" }}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="text"
                                                    placeholder="Your Name"
                                                    className="w-full p-3 border border-[#e1e4ed5b] text-[#e1e4edc8] rounded-lg placeholder-[#e1e4ed85] focus:outline-none focus:border-white"
                                                />
                                            )}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">
                                            Email
                                        </label>
                                        <Controller
                                            name="email"
                                            control={control}
                                            defaultValue=""
                                            rules={{
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                },
                                            }}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="email"
                                                    placeholder="support@envolbyte.com"
                                                   className="w-full p-3 border border-[#e1e4ed5b] text-[#e1e4edc8] rounded-lg placeholder-[#e1e4ed85] focus:outline-none focus:border-white"
                                                />
                                            )}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                        )}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">
                                            Phone
                                        </label>
                                        <Controller
                                            name="phone"
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: "Phone is required" }}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="tel"
                                                    placeholder="+1 (667) 777 2477"
                                                   className="w-full p-3 border border-[#e1e4ed5b] text-[#e1e4edc8] rounded-lg placeholder-[#e1e4ed85] focus:outline-none focus:border-white"
                                                />
                                            )}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                        )}
                                    </div> {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">
                                           Company
                                        </label>
                                        <Controller
                                            name="phone"
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: "Phone is required" }}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="tel"
                                                    placeholder="Envobyte"
                                                   className="w-full p-3 border border-[#e1e4ed5b] text-[#e1e4edc8] rounded-lg placeholder-[#e1e4ed85] focus:outline-none focus:border-white"
                                                />
                                            )}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div className="lg:col-span-2">
                                        <label className="block text-sm font-medium text-white mb-2">
                                            Message
                                        </label>
                                        <Controller
                                            name="message"
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: "Message is required" }}
                                            render={({ field }) => (
                                                <textarea
                                                    {...field}
                                                    placeholder="Type your message here..."
                                                  className="w-full p-3 border border-[#e1e4ed5b] text-[#e1e4edc8] rounded-lg placeholder-[#e1e4ed85] focus:outline-none focus:border-white"
                                                    rows="5"
                                                ></textarea>
                                            )}
                                        />
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className=" flex justify-center items-center  border border-[#e1e4ed5b] bg-[#0A2C8C]/20   text-white px-6 py-3 rounded-lg hover:bg-[#0A2C8C]/90 transition"
                                        >
                                            Send Message <TiArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </motion.div>

                        {/* Right Side: Contact Information */}
                        <motion.div
                            className="p-8 rounded-lg  order-1 lg:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <motion.h2
                        className="text-4xl md:text-5xl text-white font-bold  mb-8 "
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Let us know what you think!
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl  text-white mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Get something on your mind? Share it with us! Drop a message, and we'll respond quickly to assist you.
                    </motion.p>

                            {/* Email */}
                            <div className="mb-6 flex  gap-6">
                            <Image src={email} width={56} height={46} alt="email"></Image>
                                <div>
                                <h4 className="text-lg font-semibold text-white">Business :</h4>
                                <div className="flex gap-2"><p className="text-white">support@envolbyte.com</p> <Image src={check} alt="check" width={20} height={20}></Image></div>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="mb-6 flex  gap-6">
                               <Image src={whatsapp} width={56} height={46} alt="whatsapp"></Image>
                               <div>
                               <h4 className="text-lg font-semibold text-white">WhatsApp:</h4>
                              <div className="flex gap-2">
                              <p className="text-white">+1 (667) 777 2477</p> <Image src={check} alt="check" width={20} height={20}></Image>
                              </div>
                               </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="mb-6 flex  gap-6">
                            <Image src={linkdin} width={56} height={46} alt="whatsapp"></Image>
                                <div>
                                <h4 className="text-lg font-semibold text-white">LinkedIn:</h4>
                                <Link
                                    href="https://www.linkedin.com/company/envolbyte"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white flex  gap-2 hover:underline"
                                >
                                    www.linkedin.com/company/envolbyte <Image src={check} alt="check" width={20} height={20}></Image>
                                </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                </div>
                <Footer></Footer>
               
                
            </div>
            
        </section>
    );
};

export default ContactSection;