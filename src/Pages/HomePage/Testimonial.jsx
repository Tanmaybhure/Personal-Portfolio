import React from 'react'
import TestimonialCard from '../../Components/Testimonial/TestimonialCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagnifyX from '../../assets/Testimonials/MagnifyxLogo.svg'
import NowsBansi from '../../assets/Testimonials/NowsBansi.svg'
import FrenchNYou from '../../assets/Testimonials/FrenchNYou.svg'
import Radiance from '../../assets/Testimonials/Radiance.svg'
import Mamta from '../../assets/Testimonials/Mamta.svg'
import Client from '../../assets/Testimonials/client.svg'

function Testimonial() {

    const sliderSettings = {
        dots: true,
        infinite: true,
      
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 475, 
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  
                },
              },
          {
            breakpoint: 594, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,

            },
          },
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 2, 
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2, 
              slidesToScroll: 1,
            },
          },
        ],
      };


  return (
  <>
    <div id='Testimonial' className='w-full bg-[#06080a] md:px-3 py-20 lg:py-28 !pb-24 lg:px-10 xl:p-28 flex flex-col gap-14 lg:flex-row lg:justify-between '>

    <div className="flex flex-col relative items-center lg:items-start  px-1  gap-4">
          <h1
            className="font-bold text-center lg:text-left Hero-Title leading-[1.2]"
            style={{ fontSize: "clamp(30px, 4vw, 45px)" }}
          >
         My Client's Stories
          </h1>
          <p
                style={{ fontSize: "clamp(16px, 5vw, 16px)" }}
                className=" text-center lg:text-left  text-[#dddddd] font-light max-w-[520px]"
              >
               Empowering people in new a digital journey with my super services
              </p>

      <div className="blur-[170px] absolute -bottom-96 z-0 lg:bottom-0 left-10 w-36 h-36 bg-[#8750f7] "/>

        </div>


      <div className='md:mx-auto lg:mx-0 md:w-[660px]'>
    <Slider {...sliderSettings}>
    <div className='flex flex-col ml-3 justify-center'>
    <TestimonialCard Logo={FrenchNYou} Client={Client} Review="Taylor is a professional Designer he really helps my business by providing value to my business." Name='Parth Agarwal' Position="Owner, French 'N' You" />

        </div>
        <TestimonialCard Logo={NowsBansi} Client={Client} Review="Taylor is a professional Designer he really helps my business by providing value to my business." Name='John Doe' Position='Owner, NowsBansi' />
        <TestimonialCard Logo={Radiance} Client={Client} Review="Taylor is a professional Designer he really helps my business by providing value to my business." Name='John Doe' Position="Founder, Dr.Barde's Radiance" />
        <TestimonialCard Logo={MagnifyX} Client={Client} Review="Taylor is a professional Designer he really helps my business by providing value to my business." Name='Gaicomo Rotella' Position='CEO, MagnifyX' />
        <TestimonialCard Logo={Mamta} Client={Client} Review="Taylor is a professional Designer he really helps my business by providing value to my business." Name='Mamta Sonar' Position='Data Analyst' />
    </Slider>
    </div>
    </div>
  </>
  )
}

export default Testimonial
