import QuillShield from "@/components/QuillShield";
import Fifthscreen from "@/components/fifthScreen/fifthscreen";
import Footer from "@/components/footer/footer";
import Footerpart from "@/components/footer/footerpart";
import Fourthscreen from "@/components/fourthScreen/fourthscreen";
import Home from "@/components/Home/home";
import Navbar from "@/components/navbar";
import Secondscreen from "@/components/secondscreen";
import Sixthscreen from "@/components/sixthscreen";
import Thirdscreen from "@/components/thirdscreen";
import React from "react";

const Derby = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col justify-center items-center font-days-later bg-black">
      <div className="bg-hero-section w-full bg-no-repeat bg-contain ">
        <Navbar />
        <div className="pt-12 h-screen w-full flex items-center justify-center">
          <Home />
        </div>
      </div>
      <div>
        <Secondscreen />
      </div>
      <div>
        <Thirdscreen />
      </div>
      <div>
        <Fourthscreen />
      </div>
      <div>
        <Fifthscreen />
      </div>
      <QuillShield />
      <div className="py-8">
        <Sixthscreen />
      </div>
      <section className="mr-[-2px] self-stretch flex flex-col items-start justify-start pt-[34px] pb-[57.10000000000037px] pr-[195px] pl-[166.29999999999995px] box-border relative gap-[50.59999999999991px] max-w-full shrink-0 z-[1] text-right text-base-2 text-ea-white font-jost mq825:gap-[25px_50.59999999999991px] mq825:pt-5 mq825:pb-6 mq825:pr-12 mq825:pl-[41px] mq825:box-border mq1275:pt-[22px] mq1275:pb-[37px] mq1275:pr-[97px] mq1275:pl-[83px] mq1275:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/bg@2x.png"
        />
        <img
          className="w-[23.1px] h-[23.1px] relative hidden z-[1]"
          alt=""
          src="/vector.svg"
        />
        <div className="w-[296.8px] flex flex-row items-start justify-start py-0 pr-0.5 pl-[1.7000000000000457px] box-border">
          <div className="flex-1 flex flex-col items-end justify-start">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[18.100000000000136px]">
              <img
                className="h-[57.8px] w-[61.6px] relative z-[1]"
                alt=""
                src="/icon-1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[14.400000000000093px] px-0 pb-0 box-border min-w-[139px]">
                <img
                  className="self-stretch h-[28.9px] relative max-w-full overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/quillaudits-1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-0.5 mt-[-2.4px]">
              <div className="relative text-white z-[1]">
                Making Web3 a safer place
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[66.69999999999982px] max-w-full mq450:gap-[17px_66.69999999999982px] mq825:gap-[33px_66.69999999999982px]">
          <Footer />
          <Footerpart />
        </div>
      </section>
    </div>
  );
};

export default Derby;
