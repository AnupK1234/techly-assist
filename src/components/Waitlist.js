
const Waitlist = () => {
  return (
    <>
      <div className="lg:mt-40 lg:min-h-[500px] flex flex-col">
        <div className="text-[20px] lg:w-full text-center m-0 lg:text-[40px] font-bold lg:tracking-[0.1em] capitalize lg:inline-block text-gainsboro font-roboto">
          Be the First to Experience the Future of Storytelling
        </div>

        <div className="text-[32px] lg:text-[96px] lg:tracking-[0.02em] text-center capitalize font-bold !bg-clip-text [background:linear-gradient(181.68deg,_#d9d9d9_7.1%,_#a6a6a6_40.5%,_#c0c0c0_68%,_#fff_99.6%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Join the Waitlist Now
        </div>

        <div className="w-full lg:text-center lg:w-full">
          <div className="lg:text-[20px] text-lightgray lg:w-[643px] tracking-[0.2em] leading-[149.88%] font-light inline-block">
            Early access to the platform. Exclusive writing challenge.
            Opportunity to shape FlowWrite&apos;s development.Connect with a
            community of passionate writers
          </div>
        </div>

        <div className="lg:mt-10 flex flex-col items-center justify-center">
          <form className="flex flex-col w-full items-start justify-center lg:w-[855px]">
            <input
              type="text"
              placeholder="Name"
              className="mt-3 lg:mx-0 w-full text-center lg:text-start lg:w-[855px] lg:h-[87px] border border-[#4A4A4A] rounded-[8px] lg:pl-4 placeholder-darkgray text-[#AFAFAF] font-roboto text-[26px] lg:text-[24px] bg-[#1E1E1E80]"
            />
            <input
              type="email"
              placeholder="Email"
              className="mt-3 lg:mx-0 w-full text-center lg:text-start  lg:mt-8 lg:w-[855px] lg:h-[87px] border border-[#4A4A4A] rounded-[8px] lg:pl-4 placeholder-darkgray text-[#AFAFAF] font-roboto text-[26px]  lg:text-[24px] bg-[#1E1E1E80]"
            />

            <div className="w-full lg:w-full flex flex-col lg:flex-row">
            <input
              type="text"
              placeholder="Writer"
              className="mt-3 lg:mx-0 w-full lg:mt-8 lg:w-[855px] lg:h-[87px] border border-[#4A4A4A] rounded-[8px] lg:pl-4 placeholder-darkgray text-[#AFAFAF] font-roboto text-[26px] lg:text-[24px] bg-[#1E1E1E80] text-center lg:mr-5"
            />
            <input
              type="text"
              placeholder="Literary Agent"
              className="mt-3 lg:mx-0 w-full lg:mt-8 lg:w-[855px] lg:h-[87px] border border-[#4A4A4A] rounded-[8px] lg:pl-4 placeholder-darkgray text-[#AFAFAF] font-roboto text-[26px] lg:text-[24px] bg-[#1E1E1E80] text-center"
            />
            </div>

            <input
              type="text"
              placeholder="Preferred Genres"
              className="mt-3 lg:mx-0 w-full text-center lg:text-start  lg:mt-8 lg:w-[855px] lg:h-[87px] border border-[#4A4A4A] rounded-[8px] pl-4 placeholder-darkgray text-[#AFAFAF] font-roboto text-[26px] lg:text-[24px] bg-[#1E1E1E80]"
            />

            <div className="text-white font-poppins font-bold lg:text-17xl w-full text-center mt-4 lg:mt-10">
            Embark on Your Writing Journey
              </div>        

            <div className="flex flex-row justify-center items-center w-full">
              <button type="submit" className="m-4 lg:m-0 p-2 bg-mediumturquoise border border-[#4A4A4A] font-roboto font-extrabold rounded-[8px] tracking-[0.25rem] w-full lg:h-[87px] text-[26px] lg:text-[24px] lg:mt-10">
                SUBMIT
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

const wai = () => {
  return (
    <>
      <div className="mt-40 h-[500px]">
        <h2 className="m-0 absolute text-[40px] tracking-[0.1em] capitalize inline-block w-[1303px] h-[46px] text-gainsboro font-roboto ">
        <b>{`Be the First to Experience the `}</b>
          <span className="font-extrabold">
            <span className="text-white">Future</span>
            <span> of Storytelling</span>
          </span>
        </h2>
        <section className="absolute flex flex-col items-start justify-start gap-2 max-w-full text-center text-77xl text-lightgray font-roboto">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[0.02em] capitalize font-bold font-[inherit] !bg-clip-text [background:linear-gradient(181.68deg,_#d9d9d9_7.1%,_#a6a6a6_40.5%,_#c0c0c0_68%,_#fff_99.6%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-10xl mq800:text-29xl">
            Join the Waitlist Now
          </h1>
          {/* <div className="w-[965px] flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full text-xl font-poppins">
            <div className="flex-1 flex flex-col items-end justify-start gap-[50px] max-w-full">
              <div className="w-[829px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[643px] relative tracking-[0.2em] leading-[149.88%] font-light inline-block shrink-0 max-w-full mq450:text-base mq450:leading-[24px]">
                  Early access to the platform. Exclusive writing challenge.
                  Opportunity to shape FlowWrite&apos;s development.Connect with
                  a community of passionate writers
                </div>
              </div>
              <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[29px] max-w-full">
                <div className="self-stretch [backdrop-filter:blur(5px)] rounded-lg bg-gray-800 border-darkslategray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[47px] px-[17px] pb-[7px] max-w-full">
                  <div className="h-[87px] w-[855px] relative [backdrop-filter:blur(5px)] rounded-lg bg-gray-800 border-darkslategray-100 border-[1px] border-solid box-border hidden max-w-full" />
                  <input
                    className="w-[66px] [border:none] [outline:none] font-light font-roboto text-5xl bg-[transparent] h-[29px] relative tracking-[0.02em] capitalize text-darkgray text-center inline-block p-0 z-[1] mq450:text-lgi"
                    placeholder="name"
                    type="text"
                  />
                </div>
                <div className="self-stretch [backdrop-filter:blur(5px)] rounded-lg bg-gray-800 border-darkslategray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[33px] px-[17px] pb-[21px] max-w-full">
                  <div className="h-[87px] w-[855px] relative [backdrop-filter:blur(5px)] rounded-lg bg-gray-800 border-darkslategray-100 border-[1px] border-solid box-border hidden max-w-full" />
                  <input
                    className="w-[68px] [border:none] [outline:none] font-light font-roboto text-5xl bg-[transparent] h-[29px] relative tracking-[0.02em] capitalize text-darkgray text-center inline-block p-0 z-[1] mq450:text-lgi"
                    placeholder="e-mail "
                    type="text"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[38px] max-w-full mq800:flex-wrap">
                  <button className="cursor-pointer border-darkslategray-100 border-[1px] border-solid pt-[33px] pb-[21px] pl-[21px] pr-5 bg-gray-800 flex-1 [backdrop-filter:blur(5px)] rounded-lg box-border flex flex-row items-start justify-center min-w-[266px] max-w-full hover:bg-dimgray-400 hover:border-dimgray-100 hover:border-[1px] hover:border-solid hover:box-border mq800:flex-1">
                    <div className="h-[87px] w-[409px] relative [backdrop-filter:blur(5px)] rounded-lg bg-gray-800 border-darkslategray-100 border-[1px] border-solid box-border hidden max-w-full" />
                    <div className="relative text-5xl tracking-[0.02em] capitalize font-light font-roboto text-darkgray text-center inline-block min-w-[66px] z-[1] mq450:text-lgi">
                      Writer
                    </div>
                  </button>
                  <div className="flex-[0.4822] [backdrop-filter:blur(5px)] rounded-lg bg-gray-800 border-darkslategray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[33px] px-[115px] pb-[21px] min-w-[266px] whitespace-nowrap max-w-full mq800:flex-1">
                    <div className="h-[87px] w-[408px] relative [backdrop-filter:blur(5px)] rounded-lg bg-gray-800 border-darkslategray-100 border-[1px] border-solid box-border hidden max-w-full" />
                    <div className="w-[153px] relative text-5xl tracking-[0.02em] capitalize font-light font-roboto text-darkgray whitespace-pre-wrap text-center inline-block z-[1]">{`literary agent  `}</div>
                  </div>
                </div>
                <div className="self-stretch [backdrop-filter:blur(5px)] rounded-lg bg-gray-800 border-darkslategray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[33px] px-[17px] pb-[21px] max-w-full">
                  <input className="relative text-5xl tracking-[0.02em] capitalize font-light font-roboto bg-transparent text-darkgray text-center" placeholder="Preferred genres" />
                </div>
                <button className="cursor-pointer border-darkslategray-100 border-[1px] border-solid pt-[33px] px-5 pb-[21px] bg-mediumturquoise self-stretch [backdrop-filter:blur(5px)] rounded-lg box-border flex flex-row items-start justify-center max-w-full hover:bg-lightseagreen-100 hover:border-dimgray-100 hover:border-[1px] hover:border-solid hover:box-border">
                  <div className="relative text-5xl tracking-[0.27em] capitalize font-extrabold font-roboto text-gray-200 text-center inline-block min-w-[128px] z-[1] mq450:text-lgi">
                    SUBMIT
                  </div>
                </button>
              </form>
            </div>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Waitlist;
