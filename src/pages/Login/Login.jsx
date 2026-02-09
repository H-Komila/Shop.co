import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F0F0F0] px-4">
            <div className="max-w-md w-full bg-white rounded-[40px] shadow-xl p-10 border border-gray-100">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Link to="/" className="flex items-center">
                        <div className="w-10 h-10 bg-black rounded-xl rotate-3 flex items-center justify-center">
                            <FaCartShopping className="text-white text-xl -rotate-3" />
                        </div>
                        <span className="ml-3 text-3xl font-[1000] italic uppercase tracking-tighter text-black">
                            SHOP<span className="text-red-500">.</span>CO
                        </span>
                    </Link>
                </div>

                <h2 className="text-2xl font-black text-center uppercase italic mb-8">Tizimga kirish</h2>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-black/60 mb-2 ml-1">EMAIL</label>
                        <input 
                            type="email" 
                            placeholder="Emailingizni yozing"
                            className="w-full px-6 py-4 rounded-2xl bg-[#F0F0F0] border-none focus:ring-2 focus:ring-black outline-none transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-black/60 mb-2 ml-1">PAROL</label>
                        <input 
                            type="password" 
                            placeholder="••••••••"
                            className="w-full px-6 py-4 rounded-2xl bg-[#F0F0F0] border-none focus:ring-2 focus:ring-black outline-none transition-all"
                            required
                        />
                    </div>

                    <div className="flex justify-end pr-2">
                        <a href="#" className="text-xs font-medium text-gray-400 hover:text-black transition-colors">Parolni unutdingizmi?</a>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-black text-white py-4 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-black/10"
                    >
                        KIRISH
                    </button>
                </form>

                <div className="mt-8 text-center text-gray-500 text-sm">
                    Hisobingiz yo'qmi? 
                    <Link to="/signup" className="ml-2 font-bold text-black underline decoration-red-500 underline-offset-4">Ro'yxatdan o'ting</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;