import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="flex flex-row items-start justify-between py-0 pl-0 pr-5 box-border gap-5 text-left text-white font-h1 pt-4">
        <div className="absolute top-[0px] left-[228px] w-[983px] h-[253px]">
          <img
            className="absolute top-[-9px] left-[0px] w-full h-full z-[1]"
            alt=""
            src="/vector-11.svg"
          />
          <div className="absolute top-[-9px] left-[54px] w-[877px] h-[234px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
              alt=""
              src="/vector-12.svg"
            />
          </div>
        </div>
        <div className="w-[175px] lg:flex lg:flex-col lg:items-center lg:justify-around lg:pt-[10px] lg:pb-0 lg:pl-0 lg:pr-5 lg:box-border z-10">
          <a className="[text-decoration:none] leading-[30px] capitalize font-bold  whitespace-nowrap z-[1] text-[28px]">
            flowWrite
          </a>
        </div>

        <div className="lg:flex flex-row justify-around items-center border border-[#5C606C] rounded-[30px] h-[56px] w-[576px]">
          <div>
            <a className="[text-decoration:none] font-semibold font-poppins inline-block [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] text-[#528BA8] text-[24px] min-w-[73px] z-[3]">
              Home
            </a>
          </div>
          <div>
            <a className="[text-decoration:none] relative font-light font-poppins text-[24px]  inline-block min-w-[120px] z-[3]">
              Company
            </a>
          </div>
          <div>
            <a className="[text-decoration:none] relative font-light font-poppins text-[24px]  inline-block min-w-[80px] z-[3]">
              Pricing
            </a>
          </div>
          <div>
            <a className="[text-decoration:none] relative font-light font-poppins text-[24px]  inline-block min-w-[52px] z-[3]">
              Blog
            </a>
          </div>
        </div>

        <button className="cursor-pointer border-dimgray-200 border-[1px] border-solid py-[11px] pl-9 pr-8 bg-steelblue-300 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)] rounded-11xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-steelblue-100 hover:border-slategray hover:border-[1px] hover:border-solid hover:box-border">
          <a className="[text-decoration:none] relative text-[24px] font-light font-h1 text-white text-left inline-block min-w-[76px] z-[1]">{`Join Us `}</a>
        </button>
      </header>
    </>
  );
};

export default Navbar;
