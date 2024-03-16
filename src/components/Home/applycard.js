import React from 'react'

const Applycard = () => {
  return (
    <div className="flex-1 ">
      <div className=' max-w-md rounded-xl border border-white   [background:linear-gradient(#0a0917,_#0a0917),_#f8f8f8] shadow-blue  flex flex-col items-end justify-start  text-center font-poppins '>
      <a href="#">
        <img className="rounded-xl overflow-hidden w-full bg-contain" src="/radiant.png" alt="" />
    </a>
    <div className="self-stretch  pt-4 ">
        <div className="  gap-[12px]">
          <div className="self-stretch flex flex-row justify-center ">
            <div className=" font-semibold  text-2xl text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_#2d3648] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] tracking-wider">
             Decentralised Derby : Episode 1
            </div>
          </div>
          <div className='mx-6 py-6'>
          <button className='bg-blue-500 text-white flex justify-center w-full py-3 px-6 rounded'>
            Apply Now
          </button>
          </div>
        </div>
      </div>
   
      </div>
    
</div>
  )
}

export default Applycard