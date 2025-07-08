import { assets, projectsData } from '../assets/assets';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const Projects = () => {
  const [cardsToShow, setCardsToShow] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsToShow(3);
      } else if (width >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = projectsData.length - cardsToShow;

  const nextProjects = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevProjects = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      className='container mx-auto px-6 pt-20 py-4 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
      id='Projects'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>
        Crafting spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Slider buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button
          onClick={prevProjects}
          className='p-3 bg-gray-200 rounded mr-2'
          aria-label='Previous Projects'
        >
          <img src={assets.left_arrow} alt='Previous' />
        </button>
        <button
          onClick={nextProjects}
          className='p-3 bg-gray-200 rounded'
          aria-label='Next Projects'
        >
          <img src={assets.right_arrow} alt='Next' />
        </button>
      </div>

      {/* Slider container */}
      <div className='overflow-hidden w-full'>
        <div
          className='flex transition-transform duration-[900ms] ease-in-out'
          style={{
            transform: `translateX(-${(100 / cardsToShow) * currentIndex}%)`,
            width: `${(100 / cardsToShow) * projectsData.length}%`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='relative px-2'
              style={{ width: `${100 / projectsData.length}%` }}
            >
              <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                  <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                  <p className='text-gray-500 text-sm'>
                    {project.price} <span className='px-1'>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
