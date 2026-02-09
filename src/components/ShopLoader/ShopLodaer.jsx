import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

const ShopLoader = () => {
    return (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
            <div className="flex flex-col items-center animate-pulse">
                {/* Logo qismi */}
                <div className="flex items-center group">
                    <div className="relative flex items-center justify-center w-12 h-12 bg-black rounded-2xl rotate-3 transition-transform duration-300">
                        <FaCartShopping className="text-white text-2xl -rotate-3" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping"></div>
                    </div>
                    <div className="ml-4 flex flex-col leading-[0.8]">
                        <span className="text-4xl font-[1000] tracking-[-0.05em] uppercase italic text-black">
                            SHOP<span className="text-red-500">.</span>CO
                        </span>
                    </div>
                </div>
                {/* Yuklanish chizig'i */}
                <div className="w-48 h-1 bg-gray-100 mt-8 rounded-full overflow-hidden relative">
                    <div className="absolute h-full bg-black w-24 animate-[loading_1.5s_infinite_ease-in-out]"></div>
                </div>
            </div>

            <style>{`
                @keyframes loading {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }
            `}</style>
        </div>
    );
};

export default ShopLoader;