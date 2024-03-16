import React from 'react';
import Cards from './cards';

const Fifthscreen = () => {
  // Create an array with a length of three
  const cardsArray = new Array(3).fill(null);

  return (
    <div>
      <h2 className="mq450:text-4xl text-3xl py-20 flex flex-col justify-center items-center font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#7582f5,_#c4c9f7),_linear-gradient(#ededed,_#ededed),_#2d3648] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
        Check Out Our Past Events
        <div className="h-[2.3px] w-[170px] mt-1 relative rounded-[18.48px] bg-gray-400 z-[1]" />
      </h2>
      <div className='flex justify-center gap-5 flex-wrap'>
        {/* Map over the array and render the Cards component */}
        {cardsArray.map((_, index) => (
          <Cards key={index} />
        ))}
      </div>
    </div>
  );
}

export default Fifthscreen;
