import React from 'react'

const Cards = () => {
  return (
    <div className="w-[400px] rounded-xl border border-white shadow-lg shadow-gray-600  [background:linear-gradient(#0a0917,_#0a0917),_#f8f8f8]   flex flex-col items-end justify-start  text-center  font-poppins   ">
    <a href="#">
        <img className="rounded-xl overflow-hidden w-[400px]" src="/event.svg" alt="" />
    </a>
    <div className="self-stretch  pt-4 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="  gap-[12px]">
          <div className="self-stretch flex flex-row justify-center ">
            <div className=" font-semibold  text-2xl text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_#2d3648] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ">
             Dubai Token 2049
            </div>
          </div>
          <div className=" pb-4 text-2xl whitespace-nowrap flex flex-col justify-center items-center font-medium text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_#2d3648] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]  mq450:text-base">
           Super Mixer
          </div>
        </div>
      </div>
    
</div>
  )
}

export default Cards