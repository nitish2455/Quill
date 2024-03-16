import React from "react";
import BgQuillShield from "../assets/images/bg-quillshield.png";
import Image from "next/image";

const QuillShield = () => {
  return (
    <div className="py-8 text-center my-10 flex flex-col items-center justify-center">
      <h2 className=" text-2xl lg:text-4xl text-transparent !bg-clip-text [background:linear-gradient(90deg,_#7582f5,_#c4c9f7),_linear-gradient(#ededed,_#ededed),_#2d3648] z-10 !relative">
        Explore the QuillShield Suite
      </h2>
      <div className="border-t bg-white w-44 lg:w-80 mt-6 text-center object-center"></div>
      <div className="w-fit lg:px-20 mt-16">
        <Image
          src={BgQuillShield}
          alt="Quillshield"
          className="bg-contain object-contain object-center w-fit"
        />
      </div>
    </div>
  );
};

export default QuillShield;
