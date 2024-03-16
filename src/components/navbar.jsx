import React from 'react'


const Navbar = () => {
    
    return (
      <div className="flex items-center justify-evenly gap-8 bg-transparent z-50 mt-3">
        <div className="flex gap-2 pt-2 ml-10">
          <img className="w-[35px] h-[30px]  z-[6]" alt="" src="/icon.svg" />
          <img
            className="w-[120px] h-[30px]  z-[6] "
            alt=""
            src="/quillaudits.svg"
          />
        </div>
        <div className="flex    items-center gap-8 text-base text-white">
          <button className="hidden md:block">Services</button>
          <button className="hidden md:block">Pricing</button>
          <button className="hidden md:block">Our Audits</button>
          <button className="hidden md:block">Tools</button>
          <button className="hidden md:block">Resources</button>
          <button className="hidden md:block">Refer-earn-secure</button>
        </div>
        <div className="lg:pr-24">
          <button className="cursor-pointer border-none  bg-[transparent] [background:linear-gradient(266.04deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] shadow-[0px_13.4px_20.08px_-4.02px_rgba(0,_0,_0,_0.1),_0px_5.4px_8.03px_-5.36px_rgba(0,_0,_0,_0.1)] shrink-0 box-border whitespace-nowrap z-[6] rounded-md">
            <div className="relative text-base  text-white text-center px-3 py-2">
              Request An Audit
            </div>
          </button>
        </div>
      </div>
    );
}

export default Navbar 