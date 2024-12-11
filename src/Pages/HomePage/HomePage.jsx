import React from 'react';
import Navbar from '../../Components/SharedComponent/Navbar.jsx';
import Introduction from './Introduction.jsx';
import Stats from './Stats.jsx';
import MyServices from './MyServices.jsx';
import RecentWork from './RecentWork.jsx';
function HomePage() {
  return (
   <>
   <div className='flex flex-col items-center gap-10 lg:gap-20 w-full overflow-x-hidden h-screen font-sora will-change-auto scroll-smooth'>
   <Navbar/>
   <Introduction/>
    <Stats/>
    <MyServices/>
    <RecentWork/>
  
   </div>
   </>
  )
}

export default HomePage
