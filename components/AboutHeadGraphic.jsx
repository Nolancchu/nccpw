import React from "react";

const AboutHeadGraphic = () => {
  return (
    <div className=" w-full h-full ">
        <div className="flex w-11/12 flex-col text-4xl md:text-6xl lg:text-8xl !ml-12 items-center md:items-end mb-8">
                    <span >PROFILE:</span>
        </div>
        <div className="flex flex-col md:flex-row w-full bg-ncc-beige">
          <img
            src="/React-icon.png"
            width={400}
            className="h-8/12 align-middle mb-12"
            />
          <div className="text-8xl w-[.2rem] h-full bg-ncc-black ml-8 mr-8"></div>
          <div className="flex flex-col w-full max-lg:items-center">
            <div className="flex w-11/12 text-2xl md:text-4xl items-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="w-full h-6 bg-ncc-beige"/>
            <div className="w-11/12 md:text-2xl max-lg:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
          </div>
        </div>
        
    </div>
  );
};

export default AboutHeadGraphic;
