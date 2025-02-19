import React from 'react';
import HeaderBtn from './HeaderBtn';
import PrimaryBtn from './Buttons/PrimaryBtn';
// import LightLogo from '../../assets/HomePage/DarkLogo.svg';
import DarkLogo from '../../assets/HomePage/LightLogo.svg';
// import NavLinks from '../SharedComponent/NavLinks.js'
import Plus from '../../assets/HomePage/plusIcon.svg'




function Navbar({isScrolled,className}) {
  const PortFolioLinks =[
    {
      text:'Services',
      Link:'#Services',

    },
    {
      text:'Work',
      Link:'#Work',
    },
    {
      text:'Experience & Education',
      Link:'#Experience_&_Education',
    },
  ]
  return (
    <>
    
    <div className={`${className} flex gap-4 justify-center items-center transition-transform duration-500 ease-in-out right-0 top-0 z-[999999] w-full sticky py-2 bg-transparent`}  >
        <div className={`bg-black w-full h-full transition-transform duration-500  absolute z-0 top-0 left-0 ${isScrolled ? 'translate-y-0 shadow-xl shadow-[#8750f733] ': '-translate-y-full'} `}/>
        <div className='mx-auto justify-between  items-center  w-full px-2 md:px-5 lg:max-w-[950px] xl:max-w-[1248px] 2xl:max-w-[1348px]  flex'>


     

        <div className='flex px-3 pt-3 pb-2 items-center z-50 gap-2 md:gap-4 xl:gap-8  '>

                <a href="" className='cursor-pointer'>
                <img src={DarkLogo} alt="Logo" className=' w-6 h-6 md:w-10 md:h-10 xl:h-12 xl:w-12' />
                </a>

                <a className='font-medium  cursor-pointer hover:text-[#8750f7]' href='mailto:tanmaybhure2004@gmail.com' style={{ fontSize: "clamp(12px, 1.2vw, 16px)" }}>tanmaybhure2004@gmail.com</a>
        </div>

        <div className='flex gap-5 xl:gap-10 z-50 items-center'>
           
               <HeaderBtn className={'lg:flex hidden'}  Link={'/'}  Text={'Home'}/>
               <HeaderBtn className={'lg:flex hidden'}  Link={'/About'}  Text={'About'}/>
               <HeaderBtn className={'lg:flex hidden'} Img={Plus}  Link={'/'}  Text={'Portfolio'} DropDown={PortFolioLinks}/>
               <a className={'lg:flex hidden py-[30px] underline-animation relative gap-1 font-medium  justify-center items-center'}  href='#Testimonial'  >Testimonial</a>
               <HeaderBtn className={'lg:flex hidden'}  Link={'/Contact'}  Text={'Contact'}/>
               <PrimaryBtn 
                onClick={() => window.location.href = 'https://www.leetcode.com/u/Tanmay_bhure'} 
                className={'hidden md:flex'}  
                Text={'My Leetcode'} 
              />

               <button className='flex lg:hidden w-fit h-fit text-2xl'> ||| </button>
        </div>
        
        </div>
    </div>
    
    </>
  )
}

export default Navbar
