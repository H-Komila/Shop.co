import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CiSearch } from "react-icons/ci";
import { FaUser, FaChevronDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false); 
    const [isMobileShopOpen, setIsMobileShopOpen] = useState(false); 

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const languages = [
        { code: 'uz', label: 'UZ' },
        { code: 'en', label: 'EN' },
        { code: 'ru', label: 'RU' }
    ];

    // Linklarni /shop (yoki o'zingiz yaratgan path)ga yo'naltiramiz
    const shopCategories = [
        { name: t("header.text4"), link: "/shop" },
        { name: t("header.text5"), link: "/shop" },
        { name: t("header.text6"), link: "/shop" },
        { name: t("header.text7"), link: "/shop" }
    ];

    return (
        <header className="relative w-full font-sans bg-white border-b sticky top-0 z-[999]">
            <div className="w-full bg-black text-white text-center py-2.5 text-xs md:text-sm font-light tracking-wide">
                <span>{t("header.promo", "Sign up and get 20% off to your first order.")}</span>
                <button className="underline font-semibold ml-2 hover:text-gray-300 transition-colors">Sign Up Now</button>
            </div>

            <nav className="container mx-auto px-4 flex items-center justify-between py-4 gap-4">
                {/* Logo - Link orqali bosh sahifaga */}
                <Link to="/" className="flex items-center group cursor-pointer">
                    <div className="relative flex items-center justify-center w-8 h-8 bg-black rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-300">
                        <FaCartShopping className="text-white text-xl -rotate-3 group-hover:rotate-0 transition-transform" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-3 flex flex-col leading-[0.8]">
                        <span className="text-2xl font-[1000] tracking-[-0.05em] uppercase italic text-black">
                            SHOP<span className="text-red-500">.</span>CO
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 font-semibold text-[15px] text-black/80">
                    <li 
                        className="group relative flex items-center gap-1 cursor-pointer hover:text-black py-2"
                        onMouseEnter={() => setIsShopOpen(true)}
                        onMouseLeave={() => setIsShopOpen(false)}
                    >
                        {t("header.title")}
                        <FaChevronDown size={10} className={`transition-transform duration-200 ${isShopOpen ? 'rotate-180' : ''}`} />
                        
                        {isShopOpen && (
                            <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-xl py-3 z-[1001]">
                                {shopCategories.map((cat, idx) => (
                                    <Link 
                                        key={idx} 
                                        to={cat.link} 
                                        onClick={() => setIsShopOpen(false)}
                                        className="block px-5 py-2 hover:bg-gray-50 transition-colors text-sm text-gray-700 font-medium"
                                    >
                                        {cat.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                    <li className="cursor-pointer hover:text-black transition-all"><Link to="/on-sale">{t("header.text")}</Link></li>
                    <li className="cursor-pointer hover:text-black transition-all"><Link to="/new-arrivals">{t("header.text1")}</Link></li>
                    <li className="cursor-pointer hover:text-black transition-all"><Link to="/brands">{t("header.text2")}</Link></li>
                </ul>

                {/* Search */}
                <div className="hidden lg:flex flex-1 items-center bg-[#F0F0F0] rounded-full px-5 py-2.5 gap-3 max-w-md mx-4">
                    <CiSearch className="text-2xl text-gray-400" />
                    <input type="text" placeholder={t("header.text3")} className="bg-transparent outline-none w-full text-sm" />
                </div>

                {/* Icons */}
                <div className="flex items-center gap-3 md:gap-5 text-2xl">
                    <div className="hidden md:flex items-center border rounded-lg px-2 py-1 bg-gray-50">
                        <select 
                            value={i18n.language} 
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="text-[12px] font-black bg-transparent outline-none cursor-pointer uppercase"
                        >
                            {languages.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
                        </select>
                    </div>

                    <Link to="/cart" className="relative cursor-pointer">
                        <FaCartShopping />
                        {cartCount > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <FaUser className="hidden sm:block cursor-pointer" />

                    <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* --- Burger Menu --- */}
            <div className={`fixed inset-0 bg-black/60 z-[1000] transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}>
                <div className={`fixed left-0 top-0 h-full w-[280px] bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={e => e.stopPropagation()}>
                    <div className="flex justify-between items-center p-6 border-b">
                        <span className="font-black italic text-lg tracking-tighter uppercase">Shop.co</span>
                        <button onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
                    </div>

                    <div className="p-6 flex flex-col gap-6 text-lg font-bold text-black">
                        <div>
                            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}>
                                <span>{t("header.title")}</span>
                                <FaChevronDown size={14} className={`transition-transform duration-300 ${isMobileShopOpen ? 'rotate-180' : ''}`} />
                            </div>
                            {isMobileShopOpen && (
                                <ul className="mt-4 ml-4 flex flex-col gap-4 text-base font-medium text-gray-600 border-l-2 border-gray-100 pl-4">
                                    {shopCategories.map((cat, idx) => (
                                        <li key={idx}>
                                            <Link to={cat.link} onClick={() => setIsMenuOpen(false)}>{cat.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <Link to="/on-sale" onClick={() => setIsMenuOpen(false)}>{t("header.text")}</Link>
                        <Link to="/new-arrivals" onClick={() => setIsMenuOpen(false)}>{t("header.text1")}</Link>
                        <Link to="/brands" onClick={() => setIsMenuOpen(false)}>{t("header.text2")}</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;