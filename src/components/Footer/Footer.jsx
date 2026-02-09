import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithubAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6"; 
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();

 
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const footerLinks = [
    {
      title: t("footer.text"), 
      links: [t("footer.text1"), t("footer.text2"), t("footer.text3"), t("footer.text4")]
    },
    {
      title: t("footer.text5"), 
      links: [t("footer.text6"), t("footer.text7"), t("footer.text8"), t("footer.text9")]
    },
    {
      title: t("footer.text10"), 
      links: [t("footer.text11"), t("footer.text12"), t("footer.text13"), t("footer.text14")]
    },
    {
      title: t("footer.text15"),
      links: [t("footer.text16"), t("footer.text17"), t("footer.text18"), t("footer.text19")]
    }
  ];

  return (
    <footer className="bg-[#F0F0F0] pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-black/10 pb-12">
          
     
          <motion.div {...fadeInUp} className="lg:col-span-1">
             <div className="flex items-center group cursor-pointer mb-6">
                <div className="relative flex items-center justify-center w-8 h-8 bg-black rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <FaCartShopping className="text-white text-xl -rotate-3 group-hover:rotate-0 transition-transform" />
                </div>
                <div className="ml-3">
                    <span className="text-2xl font-[1000] uppercase italic text-black tracking-tight">
                        SHOP<span className="text-red-500">.</span>CO
                    </span>
                </div>
            </div>
            <p className="text-black/60 text-sm leading-relaxed mb-6 max-w-[250px]">
              {t("footer.title")}
            </p>
            <div className="flex gap-3">
              {[FaTwitter, FaFacebookF, FaInstagram, FaGithubAlt].map((Icon, index) => (
                <a key={index} href="#" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </motion.div>

      
          {footerLinks.map((item, index) => (
            <motion.div 
              key={index}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="font-bold uppercase tracking-widest text-black">
                {item.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-black/60 hover:text-black transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-black/60 text-sm">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-2">
          
            <div className="h-8 w-12 bg-white rounded border flex items-center justify-center text-[10px] font-bold">VISA</div>
            <div className="h-8 w-12 bg-white rounded border flex items-center justify-center text-[10px] font-bold">PAYPAL</div>
            <div className="h-8 w-12 bg-white rounded border flex items-center justify-center text-[10px] font-bold">APPLE</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;