import React from 'react';
import Rasm from "./images/rasm.png";
import Shop from "./images/shop.jpg";
import Shopp from "./images/shopp.jpg";
import { useTranslation } from 'react-i18next';
import { BsStarFill } from "react-icons/bs";
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Main = () => {
    const { t } = useTranslation();

    const slides = [
        { id: 1, img: Rasm, title: t("main.subtitle") },
        { id: 2, img: Shop, title: "NEW COLLECTION" },
        { id: 3, img: Shopp, title: "MODERN STYLE" }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <>
            <section className="relative w-full overflow-hidden">
                <Swiper
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    effect={'fade'}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="h-[600px] md:h-[700px] w-full"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div 
                                className="relative w-full h-full flex items-center bg-no-repeat"
                                style={{ 
                                    backgroundImage: `url(${slide.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                {/* --- QORA FON (OVERLAY) --- */}
                                <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

                                <div className="container mx-auto px-4 z-10">
                                    <motion.div 
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="max-w-[650px] text-center lg:text-left"
                                    >
                                        <motion.div 
                                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }} 
                                            transition={{ repeat: Infinity, duration: 3 }}
                                            className="absolute hidden lg:block top-[-50px] right-[20%]"
                                        >
                                            <BsStarFill className="text-[50px] text-white/50" />
                                        </motion.div>

                                        {/* Matnlar oq rangda bo'ldi */}
                                        <motion.h1 
                                            variants={fadeInUp}
                                            className="text-[38px] md:text-[58px] lg:text-[72px] font-[1000] leading-[1.1] text-white mb-6 uppercase italic drop-shadow-lg"
                                        >
                                            {slide.title}
                                        </motion.h1>

                                        <motion.p 
                                            variants={fadeInUp}
                                            className="text-[14px] md:text-[18px] text-white/80 mb-8 max-w-[500px] mx-auto lg:mx-0 font-medium"
                                        >
                                            {t("main.page")}
                                        </motion.p>

                                        <motion.button 
                                            variants={fadeInUp}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-12 py-4 bg-white text-black rounded-full text-lg font-bold hover:bg-gray-200 transition-all mb-12 shadow-xl"
                                        >
                                            {t("main.btn")}
                                        </motion.button>

                                        {/* Statistikalar */}
                                        <div className="flex justify-center lg:justify-start gap-6 md:gap-10 text-white">
                                            <div className="text-center lg:text-left">
                                                <h2 className="text-3xl md:text-4xl font-bold italic tracking-tighter">
                                                    <CountUp end={200} suffix="+" enableScrollSpy />
                                                </h2>
                                                <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest">{t("main.text")}</p>
                                            </div>
                                            <div className="w-[1px] h-12 bg-white/20"></div>
                                            <div className="text-center lg:text-left">
                                                <h2 className="text-3xl md:text-4xl font-bold italic tracking-tighter">
                                                    <CountUp end={2000} separator="." suffix="+" enableScrollSpy />
                                                </h2>
                                                <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest">{t("main.text1")}</p>
                                            </div>
                                            <div className="w-[1px] h-12 bg-white/20 hidden md:block"></div>
                                            <div className="hidden md:block text-center lg:text-left">
                                                <h2 className="text-3xl md:text-4xl font-bold italic tracking-tighter">
                                                    <CountUp end={30000} separator="." suffix="+" enableScrollSpy />
                                                </h2>
                                                <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest">{t("main.text2")}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Brendlar paneli */}
            <div className="bg-white py-12 border-y border-black/5">
                <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-90">
                   <span className="text-black text-3xl md:text-4xl font-black italic tracking-tighter hover:scale-110 transition-transform cursor-pointer">VERSACE</span>
                   <span className="text-black text-3xl md:text-4xl font-black italic tracking-tighter hover:scale-110 transition-transform cursor-pointer">ZARA</span>
                   <span className="text-black text-3xl md:text-4xl font-black italic tracking-tighter hover:scale-110 transition-transform cursor-pointer">GUCCI</span>
                   <span className="text-black text-3xl md:text-4xl font-black italic tracking-tighter hover:scale-110 transition-transform cursor-pointer">PRADA</span>
                   <span className="text-black text-3xl md:text-4xl font-black italic tracking-tighter hover:scale-110 transition-transform cursor-pointer">Calvin Klein</span>
                </div>
            </div>
        </>
    );
};

export default Main;