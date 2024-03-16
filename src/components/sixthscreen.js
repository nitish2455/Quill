import React from 'react'

const Sixthscreen = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[61px] box-border m font-poppins mq1275:pl-[30px] mq1275:pr-[30px] mq1275:box-border">
    <div className="flex-1 rounded-30xl [background:linear-gradient(60.49deg,_#2d2d2d,_rgba(24,_24,_24,_0)_38.5%,_rgba(0,_0,_0,_0)_54.5%,_rgba(87,_87,_87,_0.6))] box-border flex flex-row items-start justify-between p-20 rounded-xl max-w-full gap-[20px] z-[1] border-[1px] border-solid border-white mq450:pt-[55px] mq450:pb-[55px] mq450:box-border mq825:pl-[27px] mq825:pr-[27px] mq825:box-border mq1275:pl-[54px] mq1275:pr-[55px] mq1275:box-border mq1575:flex-wrap">
      <div className='md:w-[700px] md:flex md:justify-between '>
       <div className='space-y-4'>
        <p className='text-white text-3xl font-semibold'>Build With House</p>
        <p className='text-white text-xl '>Join us as a partner , buidler, or a community in our creative journey</p>
       </div>
       <div className='py-6 px-6'>

       <button className="cursor-pointer py-4 px-6  bg-white rounded-md box-border flex flex-row items-start justify-start whitespace-nowrap   border-solid border-white hover:bg-gainsboro-100 hover:box-border hover:border-[10px] hover:border-solid hover:border-gainsboro-100 mq450:pl-[35px] mq450:pr-[34px] mq450:box-border">
            <div className=" relative rounded-md bg-white box-border hidden max-w-full border-[10px] border-solid border-white" />
            <div className="relative text-2xl font-medium font-poppins text-black text-left z-[1]">
              Join the Waitlist
            </div>
          </button>
       </div>
      </div>
     
      
    </div>
  </div>
  )
}

export default Sixthscreen