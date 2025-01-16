import { NavLink } from 'react-router-dom';
import { useState} from 'react';
import Minus from '../../assets/HomePage/MinusIcon.svg';

// const [showMenuOptions, setShowMenuOptions] = useState(false);
// const changesMenuState = useCallback(() => {
//   setShowMenuOptions((prevState) => !prevState);
// }, []);


function HeaderBtn({ Text, Img, Link, className ,DropDown }) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>



  { Img && DropDown ?  (<div className='flex flex-col relative items-center' 
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      >

    
    <NavLink to={Link} className={() =>
        ` py-[30px] ${className} underline-animation  relative gap-1 font-medium flex justify-center items-center`} style={{ fontSize: "clamp(12px, 1.3vw, 16px)" }} >
      {Text} 
      {Img && !isDropdownOpen ? <img src={Img} alt={Text} className="w-5 h-5" /> : <img src={Minus} alt={Text} className="w-5  h-5" />}
    </NavLink>

    {DropDown && (
        <div className={`${isDropdownOpen ? 'h-auto translate-y-0' : 'h-0 -translate-y-2'} transition-transform duration-500 overflow-hidden   absolute top-[90%] w-fit whitespace-nowrap gap-[0.5px] shadow-2xl translate-x-[30%] shadow-[#8850f737] bg-black flex flex-col `}>
          {DropDown.map((item, index) => (
            <a
              key={index}
              href={item.Link}
              className={` ${isDropdownOpen ? 'h-auto translate-y-0' : 'h-0 -translate-y-10'}  transition-transform duration-500 py-4 px-4 pr-16 text-[16px] hover:text-[#8750f7]  font-semibold ${index === DropDown.length - 1 ? '' : 'border-b-[0.5px] border-[#2a1454]'}`}
            >
              {item.text}
            </a>
          ))}
        </div>
      )}

    </div>):(<NavLink to={Link} className={({ isActive }) =>
        `${isActive ? 'after:scale-x-100' : ''} py-[30px] ${className} underline-animation relative gap-1 font-medium flex justify-center items-center`} style={{ fontSize: "clamp(12px, 1.3vw, 16px)" }} >
      {Text} 
    </NavLink>)}
    </>
  );
}

export default HeaderBtn;
