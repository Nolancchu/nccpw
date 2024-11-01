import React from "react";
import Image from 'next/image'

const AboutHeadGraphic = () => {
  return (
    <div className="w-full min-h-[60vh] flex justify-center items-start px-8">
    <div className="w-10/12">
        <div className="flex flex-row items-center justify-around gap-4">
            <div className="flex flex-col w-6/12 md:text-2xl max-lg:mb-6">
                <div className="font-black text-6xl mr-10 text-center">
                    Who am I?
                </div>
                
                <div className="min-h-6"></div>
                
                In my portfolio website, you can take a look at some of my projects and experiences, get to know a little more about me,
                and find ways to get in contact. Hope to hear from you soon!
            </div>

            <img src='/images/logo.png' className="" alt="logo" />
        </div>
    </div>
</div>
);
};

export default AboutHeadGraphic;
