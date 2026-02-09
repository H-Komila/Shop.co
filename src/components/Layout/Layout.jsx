import React, { useState } from 'react'; // useState qo'shildi
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  // Burger menyu holatini shu yerda saqlaymiz
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
        <Header 
          isOpen={isOpen} 
          onMenuClick={() => setIsOpen(!isOpen)} 
        />
        <main className="flex-grow">
          <Outlet /> {/* Sahifalar shu yerda almashadi */}
        </main>
        <Footer/>
    </div>
  );
};

export default Layout;