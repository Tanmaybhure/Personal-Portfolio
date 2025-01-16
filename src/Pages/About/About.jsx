import React,{useRef,useEffect,useState}  from 'react'
import HeroOtherPages from '../../Components/SharedComponent/HeroOtherPages'
import Navbar from '../../Components/SharedComponent/Navbar'
import EAndEAbout from '../../Components/AboutComponents/EAndEAbout';
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
      <div  ref={scrollRef} className='flex flex-col items-center scrollDiv gap-10 lg:gap-20 w-full overflow-x-hidden h-screen font-sora will-change-auto scroll-smooth'>

    <Navbar isScrolled={isScrolled} />
   <HeroOtherPages Title={'About'} Path={'Home'} Subpath={'About'}/>
    <EAndEAbout/>

   </div>

   </>
  )
}

export default About
