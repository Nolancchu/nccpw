import React from "react";
import { Inter } from "next/font/google";

const int = Inter ({
    subsets: ['latin'],
    weight: ['600']
})

const ExperienceText = () => {
    return (
    <div>
        <div className="flex flex-col w-full justify-center items-center">
            <div className="text-2xl lg:text-3xl w-7/12 text-center mb-10">
                Over the years, I&apos;ve had the privilege to underego a wide variety of experiences, both tech-related and not, experiences like the following...
            </div>
            

            <div className="flex flex-col w-10/12 lg:w-7/12 h-auto justify-begin">
            <div className="flex flex-row items-center ">
                <div className="text-[1.8rem]">
                    <span className={int.className}>
                    Education</span>
                </div>
                <div className="w-1 h-[2.5rem] bg-ncc-black ml-4 mr-4"/>
                <div className="text-[1.3rem] leading-5 xl:leading-[.4rem] mt-3">
                    <p>2022-2023: <b>University of California - Riverside, Riverside, California</b></p>
                    <p>2023-: <b>University of California - San Diego, La Jolla, California</b></p>
                </div>
            </div>

            <div className="w-full h-6 bg-ncc-beige"/>

            <div className="flex flex-row items-center justify-begin">
                <div className="text-[1.8rem]">
                    <span className={int.className}>
                    Skills</span>
                </div>
                <div className="w-1 h-[2.5rem] bg-ncc-black ml-4 mr-4"/>
                <div className="text-[1.3rem] leading-5 xl:leading-[1.4rem] mt-3 flex flex-row -translate-y-2">
                    <div className="list-disc mr-3"><li>C++</li><li>HTML%</li></div>
                    <div className="list-disc mr-3"><li>Java</li><li>Javascript</li></div>
                    <div className="list-disc mr-3"><li>CSS</li><li>Tailwind</li></div>
                    <div className="list-disc mr-"><li>NextJS</li><li>React</li></div>
                    
                </div>
            </div>

            <div className="w-full h-6 bg-ncc-beige"/>

            <div className="flex flex-row items-center justify-begin">
                <div className="text-[1.8rem]">
                    <span className={int.className}>
                    Work</span>
                </div>
                <div className="w-1 h-[2.5rem] bg-ncc-black ml-4 mr-4"/>
                <div className="text-[1.3rem] leading-5 xl:leading-[.4rem] mt-3">
                    <p>2022-2023: <b>University of California - Riverside, Riverside, California</b></p>
                    <p>2023-: <b>University of California - San Diego, La Jolla, California</b></p>
                </div>
            </div>

            <div className="w-full h-6 bg-ncc-beige"/>

            <div className="flex flex-row items-center justify-being">
                <div className="text-[1.8rem]">
                    <span className={int.className}>
                    Awards</span>
                </div>
                <div className="w-1 h-[2.5rem] bg-ncc-black ml-4 mr-4"/>
                <div className="text-[1.3rem] leading-5 xl:leading-[.4rem] mt-3">
                    <p>2022-2023: <b>University of California - Riverside, Riverside, California</b></p>
                    <p>2023-: <b>University of California - San Diego, La Jolla, California</b></p>
                </div>
            </div>

            <div className="w-full h-6 bg-ncc-beige"/>

            <div className="flex flex-row items-center justify-begin">
                <div className="text-[1.8rem]">
                    <span className={int.className}>
                    Coursework</span>
                </div>
                <div className="w-1 h-[2.5rem] bg-ncc-black ml-4 mr-4"/>
                <div className="text-[1.3rem] leading-5 xl:leading-[.4rem] mt-3">
                    <p>2022-2023: <b>University of California - Riverside, Riverside, California</b></p>
                    <p>2023-: <b>University of California - San Diego, La Jolla, California</b></p>
                </div>
            </div>
        </div>
        </div>
        <div className="w-full h-10"/>
    </div>
    );
  };
  
  export default ExperienceText;


