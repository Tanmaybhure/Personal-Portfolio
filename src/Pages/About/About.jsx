import React,{useRef,useEffect,useState}  from 'react'
import HeroOtherPages from '../../Components/SharedComponent/HeroOtherPages'
import Navbar from '../../Components/SharedComponent/Navbar'
import EAndEAbout from '../../Components/AboutComponents/EAndEAbout';
import Skills from '../HomePage/Skills';
import Stats from '../HomePage/Stats';
import Footer from '../../Components/SharedComponent/Footer';
function About() {

 const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef(null); // Create a ref to target the scrollable div

  useEffect(() => {
    const handleScroll = () => {
      const scrollDiv = scrollRef.current;

      if (scrollDiv && scrollDiv.scrollTop > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const scrollDiv = scrollRef.current;

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
      <div  ref={scrollRef} className='flex bg-[#14091c] flex-col items-center scrollDiv gap-10 lg:gap-20 w-full overflow-x-hidden h-screen font-sora will-change-auto scroll-smooth'>

    <Navbar isScrolled={isScrolled} />
   <HeroOtherPages Title={'About'} Path={'Home'} Subpath={'About'}/>
    <EAndEAbout/>
    <div className='w-full  relative -translate-y-72'>
    <div className="blur-[150px] bg-[#8750f7] absolute !top-20 right-0 !w-[230px] !h-[300px]"/>

    <Skills/>
    </div>
    
    <div className='w-full bg-[#0e0714] h-fit -translate-y-72'>
    <Stats/>
    </div>

    

    <Footer/>
   </div>

   </>
  )
}

export default About
