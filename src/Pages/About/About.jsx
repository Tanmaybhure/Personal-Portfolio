import React,{useRef,useEffect,useState}  from 'react'
import HeroOtherPages from '../../Components/SharedComponent/HeroOtherPages'
import Navbar from '../../Components/SharedComponent/Navbar'
import EAndEAbout from '../../Components/AboutComponents/EAndEAbout';
import Skills from '../HomePage/Skills';
import Stats from '../HomePage/Stats';
import Footer from '../../Components/SharedComponent/Footer';
import TrueFocus from '../../Components/Animations/TrueFocus';
import { CircleArrowUp } from 'lucide-react';
function About() {

 const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef(null); 

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
      <div  ref={scrollRef} className='flex bg-[#0e0714]  flex-col items-center scrollDiv gap-10 lg:gap-20 w-full overflow-x-hidden h-screen font-sora will-change-auto scroll-smooth'>

    <Navbar isScrolled={isScrolled} />
   <HeroOtherPages Title={'About'} Path={'Home'} Subpath={'About'}/>
    <EAndEAbout/>
    <div className='w-full  relative -translate-y-72'>
    <div className="blur-[150px] bg-[#8750f7] absolute !top-20 right-0 !w-[230px] !h-[300px]"/>

    <Skills/>
    </div>
    
    <div className='w-full bg-[#06080a] h-fit -translate-y-72'>
    <Stats/>
    </div>

    <div className='flex flex-col -translate-y-44'>
        <p className='text-sm translate-x-8 md:translate-x-0 md:text-base -translate-y-6'>Want to start a project?</p>
    <TrueFocus 
  sentence="Lets's have a chat"
  manualMode={false}
  blurAmount={5}
  borderColor="#8750f7"
  animationDuration={0.6}
  pauseBetweenAnimations={1}
/>

<a href="mailto:tanmaybhure2004@gmail.com" className='flex gap-2 md:translate-x-[45%] lg:translate-x-[55%] translate-x-8 translate-y-7 text-sm md:text-xl group hover:underline underline-offset-4'>tanmaybhure2004@gmail.com <span className='rotate-45 transition-all duration-500 group-hover:rotate-90'><CircleArrowUp strokeWidth={1} /> </span></a>
    </div>

    <Footer/>
   </div>

   </>
  )
}

export default About
