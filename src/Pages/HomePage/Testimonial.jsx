import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import LeetCodeLogo from '../../assets/Profiles/LeetCodeLogo.svg';
// import GFGLogo from '../../assets/Profiles/GFGLogo.svg';

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
            {/* <div id='Testimonial' className='w-full bg-[#06080a] md:px-3 py-20 lg:py-28 !pb-24 lg:px-10 xl:p-28 flex flex-col gap-14 lg:flex-row lg:justify-between'>
                <div className='md:mx-auto lg:mx-0 md:w-[660px]'>
                    <Slider {...sliderSettings}>
                        <div className='flex flex-col ml-3 justify-center items-center'>
                            <a href='https://leetcode.com/' target='_blank' rel='noopener noreferrer'>
                                <img src={" "} alt='LeetCode Profile' className='w-40 h-auto'/>
                            </a>
                        </div>
                        <div className='flex flex-col ml-3 justify-center items-center'>
                            <a href='https://www.geeksforgeeks.org/' target='_blank' rel='noopener noreferrer'>
                                <img src={" "} alt='GeeksforGeeks Profile' className='w-40 h-auto'/>
                            </a>
                        </div>
                    </Slider>
                </div>
            </div> */}
        </>
    );
}

export default Testimonial;
