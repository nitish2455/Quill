import React, { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex justify-center gap-8 bg-transparent z-50 mt-3 sm:mx-0 mx-3">
      <div className="flex gap-2 pt-2">
        <img className="w-[35px] h-[30px] z-[6]" alt="" src="/icon.svg" />
        <img className="xs:w-[120px] w-[90px] h-[30px] z-[6]" alt="" src="/quillaudits.svg" />
      </div>
      {/* Hamburger icon for medium and smaller screens */}
      <button className="md:hidden text-white text-sm" onClick={toggleMenu}>
        ☰
      </button>
      {/* Menu for medium and larger screens */}
      <div className={`md:flex ${showMenu ? 'flex flex-col' : 'hidden'} gap-4`}>
        <button className="text-white text-sm">Services</button>
        <button className="text-white text-sm">Pricing</button>
        <button className="text-white text-sm">Our Audits</button>
        <button className="text-white text-sm">Tools</button>
        <button className="text-white text-sm">Resources</button>
        <button className="text-white text-sm">Refer-earn-secure</button>
      </div>
      {/* Request An Audit button */}
      <button className="cursor-pointer [border:none] sm:p-2  bg-[transparent] rounded-[8.03px] [background:linear-gradient(266.04deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] shadow-[0px_13.4px_20.08px_-4.02px_rgba(0,_0,_0,_0.1),_0px_5.4px_8.03px_-5.36px_rgba(0,_0,_0,_0.1)] overflow-hidden shrink-0 flex flex-row items-start justify-start box-border whitespace-nowrap z-[6]">
        <div className="flex-1 relative sm:text-2xl-4 text-sm sm:px-0 px-1 leading-[32.13px] font-medium font-jost text-white text-center">
          Request An Audit
        </div>
      </button>
    </div>
  );
};

export default Navbar;
