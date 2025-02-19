import React, { useState, useRef, useEffect, memo } from 'react';
import { WorkData } from '../../Data/Work.js';
import { MoveRight, MoveLeft } from 'lucide-react';
import Arrow from '../../assets/HomePage/Arrow.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const RecentWork = memo(() => {
  const WorkBtn = ['All', 'Software Development', 'Web Designs'];
  const [activeButton, setActiveButton] = useState(0);
  const buttonRefs = useRef([]);
  const [buttonPosition, setButtonPosition] = useState({ left: 0, width: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const filteredData = activeButton === 0
    ? WorkData
    : WorkData.filter((work) =>
        work.category === WorkBtn[activeButton] || work.category2 === WorkBtn[activeButton]
      );

  useEffect(() => {
    if (buttonRefs.current[activeButton]) {
      const buttonElement = buttonRefs.current[activeButton];
      const { left, width } = buttonElement.getBoundingClientRect();
      const parentLeft = buttonElement.parentElement.getBoundingClientRect().left;

      setButtonPosition({
        left: left - parentLeft,
        width: width,
      });
    }

    setCurrentIndex(0);
  }, [activeButton]);

  const paginatedData = filteredData.slice(currentIndex, currentIndex + itemsPerPage);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < filteredData.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div id='Work' className='font-sora flex flex-col items-center md:px-3 py-20 !pb-24 lg:px-10 xl:p-28 w-full gap-14'>
      <div className="flex flex-col items-center px-1 gap-4">
        <h1
          className="font-bold md:text-left text-center Hero-Title leading-[1.2]"
          style={{ fontSize: "clamp(30px, 4vw, 45px)" }}
        >
          My Recent Works
        </h1>
        <p
          style={{ fontSize: "clamp(16px, 5vw, 16px)" }}
          className="text-center text-[#dddddd] font-light max-w-[700px]"
        >
          We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
        </p>
      </div>

      <div className='flex relative rounded-full bg-black'>
        <div
          className="absolute Service-Btn rounded-full z-10 h-[48px] transition-all duration-500 ease-in-out"
          style={{
            left: `${buttonPosition.left}px`,
            width: `${buttonPosition.width}px`,
            opacity: 0.9,
          }}
        />

        {WorkBtn.map((title, index) => (
          <button
            key={index}
            ref={(el) => (buttonRefs.current[index] = el)}
            className='flex justify-center items-center p-3 px-[4vw] md:px-7 z-50 bg-transparent text-white hover:text-gray-300 transition-colors'
            onClick={() => setActiveButton(index)}
          >
            {title}
          </button>
        ))}
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className='flex flex-col px-4 md:px-0 md:flex-row transition-all duration-500 md:flex-wrap relative justify-between w-full py-4'
      >
        <div className="blur !top-1/2 left-1/2 !blur-[150px] -translate-x-1/2 -translate-y-1/2 !w-[30%] !h-[30%]" />

        <AnimatePresence mode="wait">
          {paginatedData.map((work, index) => (
            <motion.div
              key={work.id || index}
              variants={item}
              className='relative md:w-[48%] p-5 group md:p-10 pb-0 rounded-[10px] overflow-hidden workDiv mb-[30px] xl:mb-[50px] shadow-xl max-h-[276px] md:max-h-[336px] lg:max-h-[436px] xl:max-h-[506px]'
            >
              <img loading='eager' src={work.img} alt={work.title} className='object-cover rounded-sm' />

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className='z-50 absolute left-0 px-2 sm:px-4 xl:px-6 bottom-3 w-full'
              >
                <div className='Service-Btn rounded-xl flex justify-between items-center p-6'>
                  <div className='flex flex-col gap-2'>
                    <h3 className='font-sora font-bold' style={{ fontSize: "clamp(25px, 2vw, 30px)" }}>{work.title}</h3>
                    <p className='font-sora'></p>
                  </div>
                  <a href="" className='-rotate-[220deg]'>
                    <Arrow className='w-7 h-7' />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex gap-5 justify-center w-full mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="transition-all duration-500 PrimaryBtnGredient px-6 py-3 rounded-full disabled:bg-none disabled:bg-[#1f1a2b] disabled:text-[#8750f7] disabled:border disabled:border-[#8750f7]"
        >
          <MoveLeft />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= filteredData.length}
          className="transition-all duration-500 PrimaryBtnGredient px-6 py-3 rounded-full disabled:bg-none disabled:bg-[#1f1a2b] disabled:text-[#8750f7] disabled:border disabled:border-[#8750f7]"
        >
          <MoveRight />
        </motion.button>
      </div>
    </div>
  );
});

export default RecentWork;