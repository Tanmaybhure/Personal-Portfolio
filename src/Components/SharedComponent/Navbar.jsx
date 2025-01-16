import React from 'react';
import HeaderBtn from './HeaderBtn';
import PrimaryBtn from './Buttons/PrimaryBtn';
import LightLogo from '../../assets/HomePage/DarkLogo.svg';
import DarkLogo from '../../assets/HomePage/LightLogo.svg';
import NavLinks from '../SharedComponent/NavLinks.js'




function Navbar() {
  return (
    <>
    
    <div className='flex gap-4  justify-center items-center right-0 top-0 z-50 w-full sticky py-5  '>

        <div className='mx-auto justify-between  items-center  w-full px-2 md:px-5 lg:max-w-[950px] xl:max-w-[1248px] 2xl:max-w-[1348px]  flex'>


     

        <div className='flex px-3 pt-3 pb-2 items-center gap-2 md:gap-4 xl:gap-8  '>

                <a href="" className='cursor-pointer'>
                <img src={DarkLogo} alt="Logo" className=' w-6 h-6 md:w-10 md:h-10 xl:h-12 xl:w-12' />
                </a>

                <a className='font-medium  cursor-pointer hover:text-[#8750f7]' href='mailto:gajendra44.connect@gmail.com' style={{ fontSize: "clamp(12px, 1.2vw, 16px)" }}>gajendra44.connect@gmail.com</a>
        </div>

        <div className='flex gap-5 xl:gap-10 items-center'>
            {NavLinks.map((data,index)=>(
               <HeaderBtn key={index} className={'lg:flex hidden'} Img={data.img} Link={data.Link}  Text={data.text}/> ) )}
               <PrimaryBtn className={'hidden md:flex'}  Text={'Hire Me!'} />
               <button className='flex lg:hidden w-fit h-fit text-2xl'> ||| </button>
        </div>
        
        </div>
    </div>
    
    </>
  )
}

export default Navbar
