import React from 'react'
import {SkillsData} from '../../Data/SkillsData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills({className}) {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 475, 
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplaySpeed: 2000,
                },
              },
          {
            breakpoint: 594, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplaySpeed: 2000,
            },
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              autoplaySpeed: 2000,

            },
          },
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 4, 
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1280, 
            settings: {
              slidesToShow: 5, 
              slidesToScroll: 1,
            },
          },
        ],
      };
      
    
  return (
   <>
    <div className={` ${className} font-sora flex flex-col items-center md:px-3 !py-0 !pb-24 lg:px-10 xl:p-28 w-full gap-14`}>
      <div className="flex flex-col items-center px-1 gap-4">
        <h1
          className="font-bold md:text-left text-center Hero-Title leading-[1.2]"
          style={{ fontSize: "clamp(30px, 4vw, 45px)" }}
        >
         My Skills
        </h1>
        <p
          style={{ fontSize: "clamp(16px, 5vw, 16px)" }}
          className="text-center text-[#dddddd] font-light max-w-[700px]"
        >
         We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
        </p>
      </div>

      <div className='w-full '>
      <Slider {...sliderSettings}>

    {SkillsData.map((data,index)=>(
        <div key={index} className='flex flex-col ml-3 justify-center'>

            <div className=' mx-auto w-48 h-52 md:w-44 md:h-48 py-7 pb-5 flex flex-col gap-4 items-center justify-between hover:bg-[#2a1454] transition-all duration-500 hover:border border-[#8750f7] group cursor-pointer px-4 bg-[#190f23] rounded-3xl '>

                <img src={data.Img} alt="" className={` ${data.Img === '/src/assets/Skills/Tailwind.svg?t=1736680958846' ? 'w-24' :'w-20' } grayscale-[90%] group-hover:grayscale-0 transition-all duration-500 delay-100 `} />
                <span className='text-[#8750f7] grayscale group-hover:grayscale-0 delay-100 transition-all duration-500 font-bold text-lg '>{data.Name}</span>
            </div>

        </div>
       )) }
       </Slider>

      </div>


      </div>
   </>
  )
}

export default Skills
