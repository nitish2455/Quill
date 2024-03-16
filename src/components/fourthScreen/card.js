import React from 'react'

const Card = () => {
  return (
   

<div className="w-[250px] [background:linear-gradient(59.26deg,_#fff,_rgba(5,_0,_73,_0)_29.94%,_#0c0b19_45%,_rgba(4,_0,_57,_0)_55.17%,_rgba(255,_255,_255,_0.6)_90.63%)] shadow-[0px_3.2px_26.16px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start  pb-[54px] object-cover font-poppins border-[0.8px] border-solid border-whitesmoke-200 mq825:pb-[35px] mq825:box-border border-gray-200 rounded-lg  ">
    <a href="#">
        <img className="rounded-xl overflow-hidden w-[300px]" src="/Person.svg" alt="" />
    </a>
    <div className="self-stretch pt-4 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="  gap-[12px]">
          <div className="self-stretch flex flex-row justify-center ">
            <div className=" font-semibold  text-xl text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_#2d3648] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ">
              Samrat Gupta
            </div>
          </div>
          <div className=" text-lg whitespace-nowrap flex flex-col justify-center items-center font-medium text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_#2d3648] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]  mq450:text-base">
            Independent auditor
          </div>
        </div>
      </div>
    
</div>

  )
}

export default Card