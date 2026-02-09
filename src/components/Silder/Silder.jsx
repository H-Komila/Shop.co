import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Swiper kutubxonasi va modullari
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

// Swiper stillari
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// Rasmlar
import Rasm1 from "./images/rasm1.png";
import Rasm2 from "./images/rasm2.png";
import Rasm3 from "./images/rasm3.png";
import Rasm4 from "./images/rasm4.png";

const Silder = () => {
    const { t } = useTranslation();

    const styles = [
        { id: 1, title: t("silder.text"), img: Rasm1, color: "bg-[#F0EEED]" },
        { id: 2, title: t("silder.text1"), img: Rasm3, color: "bg-[#F0EEED]" },
        { id: 3, title: t("silder.text2"), img: Rasm2, color: "bg-[#F0EEED]" },
        { id: 4, title: t("silder.text3"), img: Rasm4, color: "bg-[#F0EEED]" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.h1 
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-[32px] md:text-[48px] font-[1000] text-center mb-16 uppercase italic tracking-tighter text-black"
                >
                    {t("silder.subtitle")} 
                </motion.h1>

                {/* Slayder markazda turishi uchun maxsus o'lchamdagi wrapper */}
                <div className="flex justify-center items-center">
                    <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        modules={[EffectCube, Pagination, Autoplay]}
                        className="cube-swiper !w-[300px] !h-[400px] md:!w-[450px] md:!h-[550px]"
                    >
                        {styles.map((style) => (
                            <SwiperSlide key={style.id}>
                                <div className={`relative w-full h-full ${style.color} rounded-[30px] overflow-hidden flex flex-col p-8`}>
                                    
                                    {/* Sarlavha */}
                                    <h2 className="text-2xl md:text-3xl font-black text-black mb-4 relative z-10">
                                        {style.title}
                                    </h2>

                                    {/* Rasm - Bir xil o'lchamda markazlashtirilgan */}
                                    <div className="flex-1 flex items-center justify-center">
                                        <img 
                                            src={style.img} 
                                            alt={style.title}
                                            className="w-full h-[80%] object-contain"
                                        />
                                    </div>

                                    {/* Pastki dekorativ chiziq */}
                                    <div className="w-12 h-1 bg-black rounded-full mb-4" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx global>{`
                .cube-swiper {
                    padding-bottom: 50px;
                }
                .cube-swiper .swiper-pagination-bullet-active {
                    background: #000 !important;
                    width: 25px !important;
                    border-radius: 5px !important;
                }
                /* Kub effekti vaqtida qirralar chiroyli ko'rinishi uchun */
                .swiper-slide {
                    background-position: center;
                    background-size: cover;
                }
            `}</style>
        </section>
    );
};

export default Silder;