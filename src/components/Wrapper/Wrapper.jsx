import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiOutlineMail } from "react-icons/hi"; // Pochta ikonkasini qo'shdik

const Wrapper = () => {
    const { t } = useTranslation();

    return (
        <section className="relative px-4 -mb-20 z-30">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-black rounded-[20px] py-9 px-6 md:px-16 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl"
                >
                    {/* Sarlavha qismi */}
                    <h1 className="text-white text-[32px] md:text-[40px] font-[1000] leading-tight text-center lg:text-left max-w-[550px] uppercase italic">
                        {t("wrapper.subtitle")}
                    </h1>

                    {/* Form qismi */}
                    <div className="w-full max-w-[350px] space-y-3">
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            {/* Email Input */}
                            <div className="relative group">
                                <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40 text-xl group-focus-within:text-black transition-colors" />
                                <input 
                                    type="email" 
                                    placeholder={t("wrapper.text")}
                                    className="w-full bg-white text-black py-3 pl-12 pr-4 rounded-full outline-none placeholder:text-black/40 text-sm md:text-base transition-all focus:ring-2 focus:ring-gray-300"
                                />
                            </div>

                            {/* Button */}
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-white text-black font-bold py-3 rounded-full text-sm md:text-base hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                {t("wrapper.btn")}
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Wrapper;