import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { IoStarSharp } from "react-icons/io5";

// Swiper komponentlari
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Swiper stillari
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Section = () => {
    const { t } = useTranslation();
    
   
    const [ratings, setRatings] = useState({
        1: 5, 2: 5, 3: 5, 4: 5, 5: 5
    });

    const handleRating = (id, value) => {
        setRatings(prev => ({ ...prev, [id]: value }));
    };

    const reviews = [
        { id: 1, name: t("section.text"), comment: t("section.text3") },
        { id: 2, name: t("section.text1"), comment: t("section.text4") },
        { id: 3, name: t("section.text2"), comment: t("section.text5") },
        { id: 4, name: t("section.text6"), comment: t("section.text7") },
        { id: 5, name: t("section.text1"), comment: t("section.text4") },
         { id: 2, name: t("section.text1"), comment: t("section.text4") },
        { id: 3, name: t("section.text2"), comment: t("section.text5") },
        { id: 4, name: t("section.text6"), comment: t("section.text7") },
    ];

    return (
        <section className="py-20 bg-[#F2F0F1] overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-[32px] md:text-[48px] font-[1000] text-center mb-12 uppercase italic text-black"
                >
                    {t("section.subtitle")}
                </motion.h1>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    coverflowEffect={{
                        rotate: 40,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="testimonial-coverflow !pb-14"
                >
                    {reviews.map((item) => (
                        <SwiperSlide key={item.id} className="!w-[300px] md:!w-[400px]">
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="bg-white border border-black/5 rounded-[20px] p-6 md:p-8 shadow-lg flex flex-col h-[320px]"
                            >
                                {/* Interaktiv Yulduzchalar */}
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <motion.button
                                            key={star}
                                            whileTap={{ scale: 1.3 }}
                                            onClick={() => handleRating(item.id, star)}
                                            className="focus:outline-none"
                                        >
                                            <IoStarSharp 
                                                className={`text-2xl transition-colors duration-300 ${
                                                    star <= ratings[item.id] ? "text-[#FFC633]" : "text-gray-300"
                                                }`} 
                                            />
                                        </motion.button>
                                    ))}
                                </div>

                               
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-xl font-bold text-black">{item.name}</h3>
                                    <span className="bg-[#01AB31] rounded-full p-1 flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </div>

                               
                                <div className="flex-1 overflow-y-auto custom-scrollbar">
                                    <p className="text-black/60 text-sm md:text-base italic leading-relaxed">
                                        "{item.comment}"
                                    </p>
                                </div>
                                
                                {/* Baho ko'rsatkichi */}
                                <div className="mt-4 pt-4 border-t border-black/5 text-xs font-bold text-black/40 uppercase tracking-widest">
                                    Rating: {ratings[item.id]}.0
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #eee;
                    border-radius: 10px;
                }
                .testimonial-coverflow .swiper-pagination-bullet-active {
                    background: #000 !important;
                }
            `}</style>
        </section>
    );
};

export default Section;