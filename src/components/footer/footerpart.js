import React from 'react'

const Footerpart = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[39.90000000000009px] max-w-full text-left text-sm-9 text-white font-jost mq825:gap-[20px_39.90000000000009px]">
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[1.7000000000000457px] box-border max-w-full">
      <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq1275:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[54.299999999999955px] max-w-full mq450:gap-[54.299999999999955px_27px] mq825:flex-wrap">
          <img
            className="h-[60.1px] w-[212.5px] relative object-cover min-h-[60px] z-[1]"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <img
            className="h-[60.1px] w-[194px] relative object-cover min-h-[60px] z-[1]"
            alt=""
            src="/image-1-1@2x.png"
          />
        </div>
        <div className="w-[414.6px] flex flex-col items-start justify-start pt-0 px-0 pb-[13.900000000000093px] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
            <img
              className="h-[23.1px] w-[23.1px] relative min-h-[23px] z-[1]"
              alt=""
              src="/x.svg"
            />
            <img
              className="h-[23.1px] w-[23.1px] relative min-h-[23px] z-[1]"
              alt=""
              src="/vector-3.svg"
            />
            <img
              className="h-[23.1px] w-[28.9px] relative min-h-[23px] z-[1]"
              alt=""
              src="/vector-4.svg"
            />
            <img
              className="h-[23.1px] w-[25.4px] relative min-h-[23px] z-[1]"
              alt=""
              src="/vector-5.svg"
            />
            <img
              className="h-[23.1px] w-[32.3px] relative min-h-[23px] z-[1]"
              loading="lazy"
              alt=""
              src="/medium.svg"
            />
            <img
              className="h-[23.1px] w-[30px] relative min-h-[23px] z-[1]"
              alt=""
              src="/vector-6.svg"
            />
            <img
              className="h-[23.1px] w-[30px] relative min-h-[23px] z-[1]"
              alt=""
              src="/vector-7.svg"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-col items-start justify-start gap-[13.899999999999636px] max-w-full">
      <div className="self-stretch h-[2.3px] relative bg-gray-400 overflow-hidden shrink-0 z-[1]" />
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq825:flex-wrap">
        <div className="w-[392.8px] relative inline-block shrink-0 max-w-full z-[1]">
          All Rights Reserved. © Copyright 2023. QuillAudits - LLC
        </div>
        <div className="w-[93.5px] relative text-right inline-block shrink-0 z-[1]">
          Privacy Policy
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footerpart