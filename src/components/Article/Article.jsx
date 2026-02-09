import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineStarRate } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom'; // Qo'shildi
import 'swiper/css';
import Rasm1 from "./images/rasm1.png";
import Rasm2 from "./images/rasm2.png";
import Rasm3 from "./images/rasm3.png";
import Rasm4 from "./images/rasm4.png";

const ProductRating = ({ initialRate = 4.5 }) => {
    const [rating] = useState(initialRate);
    const [count] = useState(Math.floor(Math.random() * 500) + 50);

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

const ProductCard = ({ item, t }) => {
    const navigate = useNavigate(); // Hook chaqirildi

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            onClick={() => navigate(`/product/${item.id}`)} // ID orqali sahifaga o'tish
            className="group cursor-pointer h-full"
        >
            <div className="relative aspect-[3/4] bg-[#F0EEED] rounded-[20px] md:rounded-[32px] overflow-hidden mb-4">
                <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={item.img} 
                    alt="Product" 
                />
                {item.discount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full">
                        {item.discount}
                    </div>
                )}
            </div>
            <h3 className="text-base md:text-xl font-bold text-black truncate">{item.name || t("article.text")}</h3>
            <ProductRating initialRate={4} />
            <div className="flex items-center gap-2 md:gap-3">
                <span className="text-lg md:text-2xl font-bold text-black">${item.price}</span>
                {item.oldPrice && (
                    <span className="text-base md:text-xl text-black/30 line-through font-bold">${item.oldPrice}</span>
                )}
            </div>
        </motion.div>
    );
};

const Article = () => {
    const { t } = useTranslation();
    const [showAll, setShowAll] = useState(false);

    const allProducts = [
        { id: 1, img: Rasm1, price: 120, oldPrice: null, discount: null, name: "T-shirt with Tape Details" },
        { id: 2, img: Rasm2, price: 120, oldPrice: 260, discount: "-20%", name: "Skinny Fit Jeans" },
        { id: 3, img: Rasm3, price: 180, oldPrice: null, discount: null, name: "Checkered Shirt" },
        { id: 4, img: Rasm4, price: 130, oldPrice: 160, discount: "-30%", name: "Sleeve Striped T-shirt" },
    ];

    const visibleProducts = showAll ? allProducts : allProducts.slice(0, 4);

    return (
        <section className="py-16 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h1 className="text-[32px] md:text-[50px] text-center mb-12 text-black font-black uppercase italic tracking-tighter">
                    {t("article.subtitle")}
                </motion.h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {visibleProducts.map((item) => (
                        <ProductCard key={item.id} item={item} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Article;