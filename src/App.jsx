import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";

// Komponentlarni import qilish
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import Article from './components/Article/Article';
import Aside from './components/Aside/Aside';
import Silder from './components/Silder/Silder';
import Section from './components/Section/Section';
import Mens from './components/Mens/Mens'; 
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login'; // Yangi qo'shildi
import ShopLoader from './components/ShopLoader/ShopLodaer'; // Yangi qo'shildi

const App = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    // Sayt yuklanishini simulyatsiya qilish (Loader uchun)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 soniyadan keyin sayt ochiladi
        return () => clearTimeout(timer);
    }, []);

    // Savatchaga qo'shish funksiyasi
    const addToCart = (product) => {
        setCart((prevCart) => {
            const isExist = prevCart.find((item) => 
                item.id === product.id && 
                item.selectedSize === product.selectedSize && 
                item.selectedColor === product.selectedColor
            );
            if (isExist) {
                return prevCart.map((item) =>
                    (item.id === product.id && item.selectedSize === product.selectedSize) 
                    ? { ...item, count: item.count + product.count } 
                    : item
                );
            }
            return [...prevCart, product];
        });
    };

    const totalItems = cart.reduce((sum, item) => sum + item.count, 0);

    // Agar loading holati rost bo'lsa, faqat Loaderni ko'rsatish
    if (loading) {
        return <ShopLoader />;
    }

    return (
        <BrowserRouter>
            <Routes>
                {/* Login sahifasi layoutdan tashqarida bo'ladi (Header va Footer ko'rinmasligi uchun) */}
                <Route path="/login" element={<Login />} />

                <Route path="/" element={<Layout cartCount={totalItems} />}>
                    {/* Asosiy sahifa */}
                    <Route index element={
                        <>
                            <Main />
                            <Article />
                            <Aside />
                            <Silder />
                            <Section />
                        </>
                    } />
                    
                    {/* Mahsulot tafsilotlari sahifasi */}
                    <Route path="product/:id" element={<Mens addToCart={addToCart} />} />
                    
                    {/* Do'kon sahifasi */}
                    <Route path="shop" element={<Mens addToCart={addToCart} />} />
                    
                    {/* Savatcha sahifasi */}
                    <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;