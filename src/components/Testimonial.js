const Testimonial = () => {
  return (
    <>
      <div className="relative lg:mt-20">
        <img
          className="hidden lg:block absolute lg:right-0 lg:-top-96"
          loading="lazy"
          alt=""
          src="/group-967.svg"
        />

        <div className="lg:mt-24 flex flex-row max-w-full text-center lg:text-49xl text-white font-poppins">
          <div className="ml-44 flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-[20px]">
            <h1 className="m-0 relative text-inherit tracking-[6px] leading-[52px] font-semibold font-[inherit]">
              What Our Users Say
            </h1>
            <div className="w-[505px] relative text-5xl tracking-[0.15em] capitalize font-h1 inline-block max-w-full">
              hear it from our happy customers.
            </div>
          </div>
        </div>

        <div
          className={`border border-red-500 flex flex-col lg:flex-row lg:justify-center lg:py-20 lg:gap-[61px] max-w-full text-left text-mini text-whitesmoke font-h1`}
        >
          <div className="relative lg:w-[312px] flex flex-col items-start justify-end pt-0 px-0 pb-[15px] box-border">
            <div className="flex flex-col items-start justify-start lg:pt-[76px] lg:pb-[18px] lg:pl-[21px] lg:pr-[11px] relative lg:gap-[22px]">
              <div className="w-full h-full absolute top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-gray-600 border-lightslategray-400 border-[1px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start relative">
                <img
                  className="h-32 w-[133px] absolute !m-[0] right-[24px] bottom-[-10px]"
                  loading="lazy"
                  alt=""
                  src="/ellipse-8.svg"
                />
                <div className="flex-1 relative leading-[30px] font-light z-[2]">{`"FlowWrite has revolutionized my storytelling! The app's intuitive features help me create engaging plots and develop rich characters effortlessly. My stories have never been more compelling, and the positive feedback from my readers proves it. FlowWrite is now an essential tool in my writing process!" `}</div>
              </div>
              <div className="w-[205px] flex flex-row items-start justify-start py-0 px-px box-border text-base">
                <div className="flex-1 relative leading-[30px] font-light z-[2]">{`— Ava Rich, Author `}</div>
              </div>
            </div>
            <img
              class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-[70px] h-[70px] lg:w-[107px] lg:h-[107px] object-cover z-[2]"
              alt=""
              src="/mask-group-2@2x.png"
            ></img>
          </div>

          <div className="relative h-[436px] w-[358px] relative max-w-full text-xl">
            <div className="absolute top-[0px] left-[0px] w-full h-full">
              <div className="absolute top-[39px] left-[260px] [filter:blur(100px)] bg-aqua-300 w-[60px] h-[378px]" />
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-gray-500 border-lightslategray-300 border-[1px] border-solid box-border w-full h-full z-[1]" />
            </div>
            <div className="absolute top-[103px] left-[28px] leading-[30px] font-light inline-block w-[330px] h-[308px] z-[2] mq450:text-base mq450:leading-[24px]">
              <p className="[margin-block-start:0] [margin-block-end:4px]">
                &quot;FlowWrite has been a game-changer for me. The tools make
                it easy to craft engaging plots and develop my characters.
                It&apos;s like having a co-writer who understands my style and
                enhances my stories. FlowWrite has become an essential part of
                my writing toolkit!&quot;
              </p>
              <p className="[margin-block-start:0] [margin-block-end:4px]">
                &nbsp;
              </p>
              <p className="m-0">— James Thompson, Writer</p>
            </div>
            <img
              class="absolute -top-14 left-1/2 transform -translate-x-1/2 w-[70px] h-[70px] lg:w-[124px] lg:h-[124px] object-cover z-[2]"
              alt=""
              src="/mask-group-1@2x.png"
            />
          </div>

          <div className="relative lg:w-[312px] flex flex-col items-start justify-end pt-0 px-0 pb-[15px] box-border">
            <div className="self-stretch flex flex-col items-start justify-start pt-[76px] pb-[18px] pl-[21px] pr-[11px] relative gap-[22px]">
              <img
                className="w-[133px] h-32 absolute !m-[0] right-[9px] bottom-[67px]"
                loading="lazy"
                alt=""
                src="/ellipse-8.svg"
              />
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-gray-600 border-lightslategray-400 border-[1px] border-solid box-border z-[1]" />
              <div className="self-stretch relative leading-[30px] font-light z-[2]">{`"FlowWrite has revolutionized my storytelling! The app's intuitive features help me create engaging plots and develop rich characters effortlessly. My stories have never been more compelling, and the positive feedback from my readers proves it. FlowWrite is now an essential tool in my writing process!" `}</div>
              <div className="w-[215px] flex flex-row items-start justify-start py-0 px-1.5 box-border text-base">
                <div className="flex-1 relative leading-[30px] font-light z-[2]">
                  — Taylor Levie, Author
                </div>
              </div>
            </div>
            <img
              class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-[70px] h-[70px] lg:w-[107px] lg:h-[107px] object-cover z-[2]"
              alt=""
              src="/mask-group@2x.png"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
