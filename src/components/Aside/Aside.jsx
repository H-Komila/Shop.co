import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineStarRate } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom'; // Navigatsiya uchun import
import 'swiper/css';

// Rasmlarni import qilish
import Rasm1 from "./images/rasm1.png";
import Rasm2 from "./images/rasm2.png";
import Rasm3 from "./images/rasm3.png";
import Rasm4 from "./images/rasm4.png";

const AsideRating = ({ initialRate = 4.8 }) => {
  const [rating] = useState(initialRate);
  const [count] = useState(Math.floor(Math.random() * 300) + 100);

  return (
    <div className="flex items-center gap-1 my-2">
      <div className="flex text-[#FFC633]">
        {[...Array(5)].map((_, i) => (
          <MdOutlineStarRate 
            key={i} 
            className={`text-xl ${i < Math.floor(rating) ? "text-[#FFC633]" : "text-gray-300"}`}
          />
        ))}
      </div>
      <span className="text-black text-sm font-bold ml-1">
        {rating}/5 <span className="text-black/40 font-normal">({count})</span>
      </span>
    </div>
  );
};

const AsideCard = ({ item, t }) => {
  const navigate = useNavigate(); // Hookni chaqiramiz

  const handleCardClick = () => {
    // Mahsulot detail sahifasiga yo'naltirish (masalan: /product/101)
    navigate(`/product/${item.id}`);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      onClick={handleCardClick} // Kartani bosganda sahifaga o'tish
      className="group cursor-pointer h-full"
    >
      <div className="relative aspect-[3/4] bg-[#F0EEED] rounded-[20px] md:rounded-[32px] overflow-hidden mb-4">
        <img 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          src={item.img} 
          alt={item.name} 
        />
        {item.discount && (
          <div className="absolute top-3 left-3 bg-red-100 text-[#FF3333] text-[10px] md:text-xs font-bold px-3 py-1 rounded-full">
            {item.discount}
          </div>
        )}
      </div>
      <h3 className="text-base md:text-xl font-bold text-black truncate uppercase">
        {item.name || t("aside.title")}
      </h3>
      <AsideRating />
      <div className="flex items-center gap-2 md:gap-3">
        <span className="text-lg md:text-2xl font-bold text-black">${item.price}</span>
        {item.oldPrice && (
          <span className="text-base md:text-xl text-black/30 line-through font-bold">${item.oldPrice}</span>
        )}
      </div>
    </motion.div>
  );
};

const Aside = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  // Mahsulotlar ro'yxati (ID lar bilan)
  const asideProducts = [
    { id: 101, img: Rasm1, price: 212, oldPrice: 232, discount: "-20%", name: "Vertical Striped Shirt" },
    { id: 102, img: Rasm2, price: 145, oldPrice: null, discount: null, name: "Courage Graphic T-shirt" },
    { id: 103, img: Rasm3, price: 180, oldPrice: 250, discount: "-30%", name: "Loose Fit Bermuda Shorts" },
    { id: 104, img: Rasm4, price: 130, oldPrice: null, discount: null, name: "Skinny Fit Jeans" },
    { id: 105, img: Rasm2, price: 160, oldPrice: 200, discount: "-20%", name: "Classic Polo Shirt" },
    { id: 106, img: Rasm4, price: 190, oldPrice: null, discount: null, name: "Street Style Hoodie" },
    { id: 107, img: Rasm1, price: 220, oldPrice: 280, discount: "-15%", name: "Winter Jacket" },
    { id: 108, img: Rasm3, price: 110, oldPrice: null, discount: null, name: "Cotton Shorts" },
  ];

  const visibleAside = showAll ? asideProducts : asideProducts.slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-white border-t border-black/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[50px] text-center mb-12 text-black font-[1000] uppercase italic tracking-tight"
        >
          {t("aside.subtitle") || "TOP SELLING"}
        </motion.h1>

        {/* Mobil versiya uchun Swiper */}
        <div className="block md:hidden">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={16}
            className="!overflow-visible"
          >
            {asideProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <AsideCard item={item} t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop versiya uchun Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {visibleAside.map((item) => (
              <AsideCard key={item.id} item={item} t={t} />
            ))}
          </AnimatePresence>
        </div>

        {/* "View All" tugmasi */}
        <div className="hidden md:flex justify-center mt-12">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="px-16 py-4 border border-black/10 rounded-full font-bold text-black hover:bg-black hover:text-white transition-all duration-300 uppercase text-sm tracking-widest"
          >
            {showAll ? "Show Less" : t("aside.btn") || "View All"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Aside;