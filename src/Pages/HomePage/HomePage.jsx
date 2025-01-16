import React,{useRef,useEffect,useState} from 'react';
import Navbar from '../../Components/SharedComponent/Navbar.jsx';
import Introduction from './Introduction.jsx';
import Stats from './Stats.jsx';
import MyServices from './MyServices.jsx';
import RecentWork from './RecentWork.jsx';
import Experiance_Education from './Experiance_Education.jsx';
import Skills from './Skills.jsx';
import Testimonial from './Testimonial.jsx';
import Footer from '../../Components/SharedComponent/Footer.jsx';
import Contact from './Contact.jsx';
function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDivRef = useRef(null); // Create a ref to target the scrollable div

  useEffect(() => {
    const handleScroll = () => {
      const scrollDiv = scrollDivRef.current;

      if (scrollDiv && scrollDiv.scrollTop > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const scrollDiv = scrollDivRef.current;

    if (scrollDiv) {
      scrollDiv.addEventListener('scroll', handleScroll); 
    }

    return () => {
      if (scrollDiv) {
        scrollDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  return (
   <>
   <div  ref={scrollDivRef} className='flex flex-col items-center scrollDiv gap-10 lg:gap-20 w-full overflow-x-hidden h-screen font-sora will-change-auto scroll-smooth'>
   <Navbar isScrolled={isScrolled}/>
   <Introduction/>
    <Stats/>
    <MyServices/>
    <RecentWork/>
    <Experiance_Education />
    <Skills/>
    <Testimonial/>
    <Contact/>
    <Footer/>
   </div>
   </>
  )
}

export default HomePage
