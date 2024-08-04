import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-row items-start justify-between border-t border-[#9397A9] mt-10 pt-[63.8px] px-[82px] pb-[162.6px] box-border relative text-29xl text-white font-poppins [background:linear-gradient(180deg,_#00171f,_#003459_53.6%,_#2b6283_75.6%,_rgba(46,_238,_238,_0.6))] w-full h-full">
        <div className="flex flex-col">
          <div className="flex flex-col items-start justify-start gap-[13.2px]">
            <h1 className="m-0 relative text-inherit font-black font-[inherit] shrink-0 z-[1]">{`FlowWrite `}</h1>
            <div className="flex flex-row items-start justify-start py-0 px-1.5 lg:text-xl">
              <div className="relative shrink-0 z-[1]">
                FOLLOW US ON SOCIALS
              </div>
            </div>
            <div className="flex flex-row w-full justify-between">
              <img
                className="w-10 h-[40.7px] object-cover z-[1]"
                alt=""
                src="/mask-group-3@2x.png"
              />
              <img
                className="w-10 h-[40.7px] object-cover z-[1]"
                alt=""
                src="/mask-group-4@2x.png"
              />
              <img
                className="w-10 h-[40.7px] object-contain z-[1]"
                alt=""
                src="/mask-group-5@2x.png"
              />
              <img
                className="w-10 h-[40.7px] object-cover z-[1]"
                alt=""
                src="/mask-group-6@2x.png"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start justify-start max-w-full text-xs">
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-3 gap-[17.9px]">
            <b className="relative text-lg inline-block min-w-[93px] z-[1]">
              Company
            </b>
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[38px] z-[1]">
              About
            </a>
            <b className="relative inline-block min-w-[68px] z-[1]">
              Contact us
            </b>
            <b className="relative inline-block min-w-[80px] z-[1]">
              Work with us
            </b>
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[87px] z-[1]">
              Privacy policy
            </a>
            <b className="relative inline-block min-w-[28px] z-[1]">Blog</b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[18px]">
            <b className="relative text-lg inline-block min-w-[47px] z-[1]">
              More
            </b>
            <b className="relative inline-block min-w-[42px] z-[1]">Events</b>
            <b className="relative inline-block min-w-[45px] z-[1]">Gallery</b>
            <b className="relative inline-block min-w-[79px] z-[1]">
              Membership
            </b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[18px]">
            <b className="relative text-lg inline-block min-w-[118px] z-[1]">
              Marketplace
            </b>
            <b className="relative inline-block min-w-[24px] z-[1]">Buy</b>
            <b className="relative inline-block min-w-[22px] z-[1]">Sell</b>
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[51px] z-[1]">
              Helpline
            </a>
          </div>
        </div>
      </footer>
      <div className="text-white text-center text-2xl font-roboto font-bold">©2024 FlowWrite . All rights reserved.</div>
    </>
  );
};

export default Footer;
