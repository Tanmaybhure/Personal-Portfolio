import React, { useState, useRef, useEffect } from 'react'

function RecentWork() {
  const WorkBtn = ['All', 'UI/UX', 'Web Development', 'Web Redesign']

  const [activeButton, setActiveButton] = useState(0);
  const buttonRefs = useRef([]);
  const [buttonPosition, setButtonPosition] = useState({ left: 0, width: 0 });

  useEffect(() => {
    // Update button position when active button changes
    if (buttonRefs.current[activeButton]) {
      const buttonElement = buttonRefs.current[activeButton];
      const { left, width } = buttonElement.getBoundingClientRect();
      const parentLeft = buttonElement.parentElement.getBoundingClientRect().left;
      
      setButtonPosition({
        left: left - parentLeft,
        width: width
      });
    }
  }, [activeButton]);

  return (
    <div className='font-sora flex flex-col items-center md:px-3 !py-0 !pb-24 lg:px-10 xl:p-24 w-full gap-14'>
      <div className="flex flex-col items-center px-1 gap-4">
        <h1
          className="font-bold md:text-left text-center Hero-Title leading-[1.2]"
          style={{ fontSize: "clamp(30px, 4vw, 45px)" }}
        >
          My Recent Works{" "}
        </h1>
        <p
          style={{ fontSize: "clamp(16px, 5vw, 16px)" }}
          className="text-center text-[#dddddd] font-light max-w-[700px]"
        >
          We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
        </p>
      </div>

      <div className='flex relative rounded-full bg-black'>
        {/* Active button overlay */}
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
            ref={el => buttonRefs.current[index] = el}
            className='flex justify-center items-center p-3 px-7 z-50 bg-transparent text-white hover:text-gray-300 transition-colors'
            onClick={() => setActiveButton(index)}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default RecentWork