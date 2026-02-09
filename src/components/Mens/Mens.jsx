import React, { useState, useEffect } from 'react';
import { FaStar, FaMinus, FaPlus, FaCheck } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Rasmlarni import qilish (O'zingizning manzilingizga qarab tekshiring)
import Rasm1 from "./images/rasm1.png";
import Rasm2 from "./images/rasm2.png";
import Rasm3 from "./images/rasm3.png";

const Mens = ({ addToCart }) => {
    const { id } = useParams(); // URL'dan mahsulot ID sini oladi
    const navigate = useNavigate();

    // 1. State-lar: Miqdor, O'lcham, Rang va Asosiy Rasm
    const [amount, setAmount] = useState(1);
    const [selectedSize, setSelectedSize] = useState('Large');
    const [selectedColor, setSelectedColor] = useState('#4F583E');
    const [mainImage, setMainImage] = useState(Rasm1);

    // Mahsulot ma'lumotlari (Hozircha static, keyinchalik API dan kelishi mumkin)
    const product = {
        id: id || 99,
        name: "ONE LIFE GRAPHIC T-SHIRT",
        price: 260,
        oldPrice: 300,
        discount: "-40%",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        colors: ['#4F583E', '#314F4A', '#31344F'],
        sizes: ['Small', 'Medium', 'Large', 'X-Large'],
        gallery: [Rasm1, Rasm2, Rasm3] // Kichik rasmlar uchun massiv
    };

    // Sahifa yuklanganda tepaga chiqish
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Savatchaga qo'shish funksiyasi
    const handleAddToCart = () => {
        addToCart({
            ...product,
            img: mainImage,
            count: amount,
            selectedSize,
            selectedColor
        });
        navigate('/cart'); 
    };

    return (
        <div className="container mx-auto px-4 py-8 bg-white">
            {/* Breadcrumb - Yo'l ko'rsatkich */}
            <div className="text-black/60 text-sm mb-6 md:mb-10">
                Home &gt; Shop &gt; Men &gt; <span className="text-black font-medium">T-shirts</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
                
                {/* --- CHAP TARAF: RASMLAR GALEREYASI --- */}
                <div className="flex flex-col-reverse md:flex-row gap-4">
                    
                    {/* Kichik rasmlar (Vertical list) */}
                    <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-visible pb-2 md:pb-0">
                        {product.gallery.map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setMainImage(img)} // Bosilganda asosiy rasmni o'zgartiradi
                                className={`flex-shrink-0 w-20 h-20 md:w-32 md:h-32 bg-[#F0EEED] rounded-[15px] md:rounded-[20px] overflow-hidden border-2 cursor-pointer transition-all duration-300
                                    ${mainImage === img ? 'border-black scale-95' : 'border-transparent opacity-70 hover:opacity-100'}`}
                            >
                                <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* Asosiy katta rasm */}
                    <div className="flex-1 bg-[#F0EEED] rounded-[20px] md:rounded-[32px] overflow-hidden flex items-center justify-center relative aspect-square md:aspect-auto">
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={mainImage} // Key o'zgarganda animatsiya ishlaydi
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                src={mainImage} 
                                alt="Main Product" 
                                className="w-full h-full object-cover" 
                            />
                        </AnimatePresence>
                    </div>
                </div>

                {/* --- O'NG TARAF: MAHSULOT MA'LUMOTLARI --- */}
                <div className="flex flex-col">
                    <h1 className="text-3xl md:text-5xl font-[1000] italic uppercase mb-3 tracking-tighter leading-none">
                        {product.name}
                    </h1>

                    {/* Reyting */}
                    <div className="flex items-center gap-3 mb-4 text-[#FFC633]">
                        <div className="flex gap-1 text-xl"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        <span className="text-black text-sm font-medium">4.5/5</span>
                    </div>

                    {/* Narxlar */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-2xl md:text-3xl font-bold text-black">${product.price}</span>
                        <span className="text-2xl md:text-3xl font-bold text-black/30 line-through">${product.oldPrice}</span>
                        <span className="bg-[#FF3333]/10 text-[#FF3333] px-4 py-1 rounded-full text-sm font-bold">
                            {product.discount}
                        </span>
                    </div>

                    {/* Tavsif */}
                    <p className="text-black/60 mb-8 border-b border-black/10 pb-8 leading-relaxed text-base">
                        {product.description}
                    </p>

                    {/* Rang tanlash */}
                    <div className="mb-6 border-b border-black/10 pb-8">
                        <p className="text-black/60 mb-4 font-medium text-sm uppercase tracking-wider">Select Colors</p>
                        <div className="flex gap-4">
                            {product.colors.map(color => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    style={{ backgroundColor: color }}
                                    className="w-10 h-10 rounded-full flex items-center justify-center border border-black/10 transition-transform active:scale-90 hover:ring-2 ring-offset-2 ring-black/20"
                                >
                                    {selectedColor === color && <FaCheck className="text-white text-xs" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* O'lcham tanlash */}
                    <div className="mb-8 border-b border-black/10 pb-8">
                        <p className="text-black/60 mb-4 font-medium text-sm uppercase tracking-wider">Choose Size</p>
                        <div className="flex gap-3 flex-wrap">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 
                                        ${selectedSize === size 
                                            ? 'bg-black text-white' 
                                            : 'bg-[#F0F0F0] text-black/60 hover:bg-black/5'}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Miqdor va Savatchaga qo'shish tugmasi */}
                    <div className="flex gap-5 h-14 md:h-16">
                        <div className="flex items-center justify-between bg-[#F0F0F0] w-32 md:w-44 rounded-full px-5">
                            <button 
                                onClick={() => setAmount(a => Math.max(1, a - 1))} 
                                className="text-xl hover:text-black transition-colors"
                            >
                                <FaMinus />
                            </button>
                            <span className="font-bold text-lg md:text-xl">{amount}</span>
                            <button 
                                onClick={() => setAmount(a => a + 1)} 
                                className="text-xl hover:text-black transition-colors"
                            >
                                <FaPlus />
                            </button>
                        </div>
                        
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-black text-white rounded-full font-bold text-base md:text-lg hover:bg-black/90 transition-all active:scale-95 shadow-lg shadow-black/10"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mens;