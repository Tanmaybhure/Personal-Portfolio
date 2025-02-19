import React from 'react'
import DarkLogo from '../../assets/HomePage/LightLogo.svg';
import NavLinks from '../SharedComponent/NavLinks.js'


function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <>
        <div className='bg-[#06080a] w-screen flex items-center justify-center pt-10 pb-5 '>
            <div className=' flex flex-col gap-5 justify-center items-center '>
                <img src={DarkLogo} alt="" className='w-20' />

                <div className='flex gap-5 xl:gap-10 items-center justify-center'>
            {NavLinks.map((data,index)=>(
   <a key={index} href={data.Link} className={
        `py-[30px]  underline-animation relative gap-1 font-medium flex justify-center items-center`} style={{ fontSize: "clamp(12px, 1.3vw, 16px)" }} >
      {data.text} 
    </a>               
               ) )}
        </div>

               <p className='text-[#bdbdbd] text-center'> © {currentYear} Tanmay Bhure | All Rights Reserved | Developed by <a href='https://linkedin.com/in/tanmay-bhure' target='_blank' className='text-white hover:underline underline-offset-2 font-medium'>Tanmay Bhure </a></p>

            </div>

        </div>
    </>
  )
}

export default Footer
