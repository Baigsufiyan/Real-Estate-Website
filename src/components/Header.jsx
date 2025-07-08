import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div
      className='min-h-screen mb-4 bg-cover bg-center w-full overflow-hidden relative'
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      {/* Navbar on top layer */}
      <div className='absolute top-0 left-0 w-full z-20'>
        <Navbar />
      </div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-center w-full absolute top-1/2 transform -translate-y-1/2 z-10 px-4'
      >
        <div className='container mx-auto text-white px-6 md:px-20 lg:px-32'>
          <h2 className='text-5xl sm:text-6xl md:text-[82px] font-semibold max-w-3xl mx-auto'>
            Explore homes that fit your dreams
          </h2>
          <div className='space-x-6 mt-16'>
            <a href="#Projects" className='border border-white px-8 py-3 rounded'>
              Projects
            </a>
            <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
