import React,{useRef,useEffect,useState} from 'react';
import { AnimatePresence, motion } from "framer-motion";
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
import IntroSVG from '../../Components/Animations/IntroSVG.jsx';
function HomePage() {

  const [showHero, setShowHero] = useState(false);

  
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDivRef = useRef(null); 

  useEffect(() => {
    setTimeout(() => {
      setShowHero(true);
    }, 2500);
  }, []);

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
  }, [showHero]);


  return (
   <>

<AnimatePresence>
        {!showHero && (
          <motion.div
            exit={{ opacity: 0}}
            transition={{ duration: 0.5 }}
            className="h-screen fixed bg-[#0c0811] z-[999999999999999] flex items-center justify-center inset-0 w-screen"
          >
    
            <IntroSVG/>
          </motion.div>
        )}
      </AnimatePresence>

  {showHero && (
   <div  ref={scrollDivRef} className='flex flex-col items-center scrollDiv w-full overflow-x-hidden h-screen font-sora will-change-auto scroll-smooth'>
   <Navbar isScrolled={isScrolled}/>
   <Introduction/>
    <Stats/>
    <MyServices/>
    <RecentWork/>
    <Experiance_Education />
    <Skills className='!pt-20' />
    <Testimonial/>
    <Contact/>
    <Footer/>
   </div>)}
   </>
  )
}

export default HomePage
