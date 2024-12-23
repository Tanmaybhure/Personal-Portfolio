import React, { useState, useRef, useEffect } from 'react'
import Magnifyx from '../../assets/RecentWork/Magnify.png'
import NowsBansi from '../../assets/RecentWork/Bansi.png'
import FrenchNYou from '../../assets/RecentWork/FrenchNYou.png'
import Rediance from '../../assets/RecentWork/Rediance.png'
import MamtaPortfolio from '../../assets/RecentWork/MamtaPortfolio.png'
import Deltasafe from '../../assets/RecentWork/Deltasafe.png'
import Gtube from '../../assets/RecentWork/Gtube.png'
import Elearners from '../../assets/RecentWork/Elearners.png'

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
    <div className='font-sora flex flex-col items-center md:px-3 !py-0 !pb-24 lg:px-10 xl:p-28 w-full gap-14'>
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

        <div className='flex flex-wrap relative h-[1000px] justify-between w-full py-4   '>

        <div className="blur !top-1/2 left-1/2 !blur-[150px]  -translate-x-1/2 -translate-y-1/2 !w-[30%] !h-[30%]"/>

          <div className=' bg-blue-300 w-[48%] p-10 pb-0 rounded-[10px] overflow-hidden workDiv mb-[30px] shadow-xl  max-h-[506px]' > <img src={Magnifyx} alt="Magnifyx" className='object-cover rounded-sm ' /> </div>
          <div className=' bg-blue-300 w-[48%] p-10 pb-0 rounded-[10px] min-h-[360px] overflow-hidden workDiv mb-[30px] shadow-xl  max-h-[506px]' > <img src={Rediance} alt="Rediance" className='object-cover rounded-sm ' /> </div>
          <div className=' bg-blue-300 w-[48%] p-10 pb-0 rounded-[10px] min-h-[360px] overflow-hidden workDiv mb-[30px] shadow-xl  max-h-[506px]' > <img src={Deltasafe} alt="Deltasafe" className='object-cover rounded-sm' /> </div>
          <div className=' bg-blue-300 w-[48%] p-10 pb-0 rounded-[10px] min-h-[360px] overflow-hidden workDiv mb-[30px] shadow-xl max-h-[506px]'> <img src={FrenchNYou} alt="FrenchNYou" className='object-cover rounded-sm' /> </div>
          <div className=' bg-blue-300 w-[48%] p-10 pb-0 rounded-[10px] min-h-[360px] overflow-hidden workDiv mb-[30px] shadow-xl max-h-[506px]' > <img src={Gtube} alt="Gtube" className='object-cover rounded-sm' /> </div>
          <div className=' bg-blue-300 w-[48%] p-10 pb-0 rounded-[10px] min-h-[360px] overflow-hidden workDiv mb-[30px] shadow-xl max-h-[506px]'> <img src={NowsBansi} alt="NowsBansi" className='object-cover rounded-sm' /> </div>
          <div className=' bg-blue-300 w-[48%] p-10 pb-0 rounded-[10px] min-h-[360px] overflow-hidden workDiv mb-[30px] shadow-xl max-h-[506px]'> <img src={MamtaPortfolio} alt="Portfolio" className='object-cover rounded-sm' /> </div>
          <div className=' bg-blue-300 w-[48%] p-10 pb-0 rounded-[10px] min-h-[360px] overflow-hidden workDiv mb-[30px] shadow-xl max-h-[506px]'> <img src={Elearners} alt="Elearners" className='object-cover rounded-sm' /> </div>


        </div>

    </div>
  )
}

export default RecentWork