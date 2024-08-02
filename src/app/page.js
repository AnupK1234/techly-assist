"use client";

import Navbar from "@/components/Navbar";
import Rectangle53 from "../../public/rectangle-53.svg";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <main className="bg-gray-200 min-h-[3000px] overflow-x-hidden flex flex-col justify-center items-center">
        <div className="relative w-full">
          <Navbar />
          <div className="absolute top-[71px] left-[-26.62px] [background:linear-gradient(89.99deg,_rgba(56,_254,_254,_0.57)_9.5%,_#417897_52%,_#003459)] w-[634.5px] h-[202px] [transform:_rotate(36.2deg)] [transform-origin:0_0]"></div>

          <div className="absolute top-[270.94px] left-[1689.2px] [background:linear-gradient(89.99deg,_rgba(56,_254,_254,_0.57)_9.5%,_#417897_52%,_#003459)] w-[634.5px] h-[202px] [transform:_rotate(143.8deg)] [transform-origin:0_0]"></div>
          <div className="h-screen" style={{ border: "1px solid red" }}>
            <div
              className="absolute top-[150px] left-[318px] rounded-2xs z-[2]"
              style={{ border: "2px solid red" }}
            >
              <img
                className="h-[467px] w-[796px] relative rounded-2xs max-w-full"
                alt=""
                src="/rect-61.png"
                style={{ border: "2px solid red" }}
              />
              <b className="absolute top-[150px] left-1/2 text-[32px] font-bold z-[4] text-[#000000]">
                DASHBOARD
              </b>
              <img
                className="absolute top-[250px] left-[400px] rounded-2xs w-[465px] h-[273px] z-[4]"
                loading="lazy"
                alt=""
                src="/rect-62.png"
              ></img>

              <div
                className="absolute top-[426px] w-[1048px] h-[189px] flex flex-col items-center justify-center [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25)_inset)] z-[5] text-gainsboro"
                style={{ border: "1px solid red" }}
              >
                <b className="text-67xl font-roboto font-bold text-center">
                  TRANSFORM YOUR IDEAS
                </b>
                <b className="text-67xl font-roboto mt-0">
                  INTO{" "}
                  <span className="text-75xl text-transparent !bg-clip-text [background:linear-gradient(90deg,_#ecc440_43.5%,_#fffa8a_52.5%,_#ddac17_71.1%,_#ffff95_87.1%)]">
                    BESTSELLERS
                  </span>
                </b>
              </div>

              <div className="absolute top-[656px] left-[233px] text-xl tracking-[0.15em] text-white inline-block w-[592px] font-poppins">
                <span className="font-medium">
                  Your All-in-One Platform for{" "}
                </span>
                <b>Writing</b>
                <span className="font-medium">, </span>
                <b>Collaboration</b>
                <span className="font-medium">, and </span>
                <b>Publishing</b>
                <span className="font-medium"> Success.</span>
              </div>
            </div>
          </div>

          <div className="absolute top-[433px] left-[-106px] w-[367px] h-[762.5px]">
            <img
              className="absolute top-[453px] left-[303px] w-[0.7px] h-[124.1px] object-contain"
              loading="lazy"
              alt=""
              src="/vector-8.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full"
              alt=""
              src="/group-966.svg"
            />
            <img
              className="absolute top-[166px] left-[238.2px] w-[0.7px] h-[124.1px] object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
          </div>

          <div className="absolute top-[440px] right-[-100px] w-[367px] h-[762.5px]">
            <img
              className="absolute top-[459px] left-[68px] w-[0.7px] h-[124.1px] object-contain"
              loading="lazy"
              alt=""
              src="/vector-8.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
              alt=""
              src="/group-967.svg"
            />
            <img
              className="absolute top-[175px] left-[128px] w-[0.7px] h-[124.1px] object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/vector-8.svg"
            />
          </div>

          <div className="relative lg:h-[80px] flex justify-center items-center mt-32">
            <button className="cursor-pointer border-lightblue border-[2px] border-solid py-[15px] px-6 text-[20px] font-h1 font-[600] bg-[#2FEEEE] hover:bg-lightseagreen-200 rounded-[82px] mr-6 h-[75px] w-[276px]">
              JOIN THE WAITLIST
            </button>
            <button className="cursor-pointer border-[#ADEBFF] border-[2px] border-solid py-[15px] px-6 text-[20px] font-h1 font-[600] rounded-[82px] text-white h-[75px] w-[276px]">
              LEARN MORE
            </button>
          </div>

          <div
            className="w-full flex flex-col text-aqua-100 font-poppins mt-40"
            style={{ border: "2px solid red" }}
          >
            <div
              className="w-56 flex flex-row items-start justify-start py-0 px-[15px] tracking-[0.18em] ml-52"
              style={{ border: "2px solid red" }}
            >
              FEATURES
            </div>
            <div
              className="text-white text-center text-29xl font-roboto"
              style={{ border: "2px solid red" }}
            >
              <p className="m-0">
                <b className="tracking-[-0.25px]">
                  Join a Community Where Your Story Comes to Life
                </b>
              </p>
              <p className="m-0 text-17xl tracking-[8px]">
                Faster Than It Ever Has Before
              </p>
            </div>
          </div>

          {/* Card components starts */}
          <Features />
          <HowItWorks/>
        </div>
      </main>
    </>
  );
}
