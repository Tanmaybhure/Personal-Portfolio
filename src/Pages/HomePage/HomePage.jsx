import React from 'react';
import Navbar from '../../Components/SharedComponent/Navbar.jsx';
import Introduction from './Introduction.jsx';
import Stats from './Stats.jsx';
import MyServices from './MyServices.jsx';
import RecentWork from './RecentWork.jsx';
import Experiance_Education from './Experiance_Education.jsx';
import Skills from './Skills.jsx';
import Testimonial from './Testimonial.jsx';
function HomePage() {
  return (
   <>
   <div className='flex flex-col items-center gap-10 lg:gap-20 w-full overflow-x-hidden h-screen font-sora will-change-auto scroll-smooth'>
   <Navbar/>
   <Introduction/>
    <Stats/>
    <MyServices/>
    <RecentWork/>
    <Experiance_Education />
    <Skills/>
    <Testimonial/>
   </div>
   </>
  )
}

export default HomePage
