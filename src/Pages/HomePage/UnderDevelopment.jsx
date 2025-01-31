import React from 'react';
import developmentGif from '../../assets/development.gif'; 
import developmentText from '../../assets/develment_text.gif'; 

function UnderDevelopment() {
  return (
    <div className='absolute font-ruso flex flex-col items-center gap-10 justify-center top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
      <img src={developmentGif} alt="Under Development" />
      <img src={developmentText} alt="Under Development" />
      {/* <h1 className='text-4xl font-bold'>Under Development</h1> */}
    </div>
  );
}

export default UnderDevelopment;
