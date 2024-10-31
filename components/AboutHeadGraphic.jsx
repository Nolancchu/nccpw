import React from "react";
import Image from 'next/image'

const AboutHeadGraphic = () => {
  return (
    <div className=" w-full h-full ">
        <div className="flex w-11/12 flex-col text-4xl md:text-6xl lg:text-8xl !ml-12 items-center md:items-end mb-8">
        </div>
        <div className="flex flex-col md:flex-row w-full ">
    
          <div className="text-8xl w-[.2rem] h-full ml-8 mr-8"></div>
          <div className="flex flex-col w-full max-lg:items-center">
            <div className="flex w-11/12 text-2xl md:text-4xl items-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="w-full h-6 "/>
            <div className="w-11/12 md:text-2xl max-lg:mb-6">
              Hello, my name is Nolan Chu, a third-year data science & economics undergraduate at the University of California, San Diego.
              <br/><br/>
              In my portfolio website, you can take a look at some of my projects and experiences, get to know a little more about me,
              and find ways to get in contact. Hope to hear from you soon!</div>
          </div>
        </div>
        
    </div>
  );
};

export default AboutHeadGraphic;
