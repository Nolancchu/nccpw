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

                I'm Nolan Chu, a data scientist and economist, currently studying at the University of California, San Diego.
                At the moment, I'm looking for internship oppurtunities, in both the tech and finance sectors, in order to hone my
                real-world skills and gain more hands-on experience. 

                <div className="h-4"></div>

                Born and raised in Arcadia, California, I've always held a fascination surrounding the stories hidden in data. 
                It's what led me to pursue degrees in both data science &amp; economics &amp; it's what inspires me to do the work that I do.

                <div className="h-4"></div>

                On campus, when I'm not in class or working on projects, I'm writing and leading data science workshops as part of the 
                Data Science Student Society, the premier undergraduate data science organization at UCSD. 

                <div className="h-4"></div>

                In my portfolio website, you can take a look at some of my projects and experiences, get to know a little more about me,
                and find ways to get in contact. Hope to hear from you soon!
            </div>

            <img src='/images/mephoto.jpg' className="w-[39%] mt-12 rounded-full" alt="professional headshot" />
        </div>
        <div className="h-32"></div>
    </div>
</div>
);
};

export default AboutHeadGraphic;
