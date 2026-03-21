const Home = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="flex flex-col items-left w-full gap-4">
        <h1 className="text-4xl font-bold">Hey, I'm Jamila Azad!</h1>
        <p className="text-lg text-gray-700 max-w-2xl text-left">
          I'm an aspiring designer that's intrigued in making digital designs that are accessible and easy to use. Currently I'm working on personal projects displaying my end to end design from ideation to prototype.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <img src="images/image1.jpeg" alt="Project 1" className="w-full h-auto object-cover rounded" />
        <img src="images/image2.jpeg" alt="Project 2" className="w-full h-auto object-cover rounded" />
        <img src="images/image3.jpeg" alt="Project 3" className="w-full h-auto object-cover rounded" />
      </div>
      <h2 className="text-2xl font-semibold">Book recommendation website</h2>
      <h2 className="text-2xl font-semibold">Notification priority</h2>

    </div>
    // <div className="flex bg-background w-full relative items-center">

    //   <div className="flex flex-col w-[1033px] items-start gap-[11px] absolute top-[205px] left-[205px]">
    //     <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
    //       <div className="relative flex items-center w-fit mt-[-1.00px] [font-family:'Inika-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[60px] whitespace-nowrap">
    //         Hey, I&apos;m Jamila Azad!
    //       </div>
    //     </div>

    //     <div className="flex items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto]">
    //       <p className="relative w-[1013px] mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#000000bf] text-2xl tracking-[0] leading-[44px]">
    //         I&apos;m an aspiring designer that&apos;s intrigued in making
    //         digital designs that are accessible and easy to use. Currently
    //         I&apos;m working on personal projects displaying my end to end
    //         design from ideation to prototype.
    //       </p>
    //     </div>
    //   </div>

    //    <div className="absolute top-[527px] left-[215px] w-[1086px] h-[633px]">
    //     <img
    //       className="left-0 w-[390px] aspect-[0.62] absolute top-0 h-[633px] object-cover"
    //       alt="Image"
    //       src="images/image1.jpeg"
    //     />

    //     <img
    //       className="left-96 w-[364px] aspect-[0.58] absolute top-0 h-[633px] object-cover"
    //       alt="Image"
    //       src="images/image2.jpeg"
    //     />

    //     <img
    //       className="left-[748px] w-[338px] aspect-[0.53] absolute top-0 h-[633px] object-cover"
    //       alt="Image"
    //       src="images/image3.jpeg"
    //     />
    //   </div>

    //   <div className="top-[1204px] left-[497px] inline-flex items-center justify-center gap-2.5 p-2.5 absolute">
    //     <div className="relative flex items-center w-fit mt-[-1.00px] [font-family:'Inika-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
    //       Book recommendation website
    //     </div>
    //   </div>

    //   <div className="top-[1926px] left-[555px] inline-flex items-center justify-center gap-2.5 p-2.5 absolute">
    //     <div className="relative flex items-center w-fit mt-[-1.00px] [font-family:'Inika-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
    //       Notification priority
    //     </div>
    //   </div>

    //   {/* <img
    //     className="absolute top-[2119px] left-0 w-[1440px] h-px object-cover"
    //     alt="Line"
    //     src={line8}
    //   />

    //   <img
    //     className="absolute top-[2119px] left-0 w-[1440px] h-px object-cover"
    //     alt="Line"
    //     src={line9}
    //   /> */}
    // </div>
  );
};

export default Home;
