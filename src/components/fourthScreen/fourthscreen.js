import React from 'react';
import Card from './card';

const Fourthscreen = () => {
 
  const cardsArray = new Array(4).fill(null);

  return (
    <div>
      <h2 className="text-4xl py-20 flex flex-col  justify-center items-center font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#7582f5,_#c4c9f7),_linear-gradient(#ededed,_#ededed),_#2d3648] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
        Meet The Builders
        <div className="h-[2.3px] w-[170px] mt-1 relative rounded-[18.48px] bg-gray-400 z-[1]" />
      </h2>
      <div className='flex justify-center gap-8 flex-wrap'>
        
        {cardsArray.map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Fourthscreen;
