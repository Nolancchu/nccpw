import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const AboutHeadGraphic = () => {
return (
<div className="w-full min-h-[40vh] flex justify-center items-start px-4 sm:px-6 lg:px-8 py-8 mb-12 sm:mb-16 lg:mb-20">
    <div className="w-full max-w-7xl">
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-7/12 text-base sm:text-lg md:text-2xl space-y-4 order-2 lg:order-1">
        <h1 className="font-black text-4xl sm:text-5xl md:text-6xl mb-6 text-center lg:text-left">
            Who am I?
        </h1>

        <p>
            I&apos;m Nolan Chu, a data scientist and economist, currently
            studying at the University of California, San Diego. At the moment,
            I&apos;m looking for internship opportunities, in both the tech and
            finance sectors, in order to hone my real-world skills and gain more
            hands-on experience.
        </p>

        <p>
            Born and raised in Arcadia, California, I&apos;ve always held a
            fascination surrounding the stories hidden in data. It&apos;s what
            led me to pursue degrees in both data science &amp; economics &amp;
            it&apos;s what inspires me to do the work that I do.
        </p>

        <p>
            On campus, when I&apos;m not in class or working on projects,
            I&apos;m writing and leading data science workshops as part of the
            Data Science Student Society, the premier undergraduate data science
            organization at UCSD.
        </p>

        <p>
            In my portfolio website, you can take a look at some of my projects
            and experiences, get to know a little more about me, and find ways to
            get in contact. Hope to hear from you soon!
        </p>

        {/* Contact Section */}
        <div className="flex flex-col items-center w-full pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4">
            <motion.a
                target="_blank"
                href="https://www.linkedin.com/in/nolan-chu/"
                className="text-ncc-brown transform transition-transform hover:text-ncc-black hover:scale-[1.15] duration-700"
            >
                <FaLinkedin size={40} className="sm:w-12 sm:h-12" />
            </motion.a>
            <div className="hidden sm:block bg-ncc-black h-12 w-[0.18rem] mx-3"></div>
            <motion.a
                target="_blank"
                className="text-ncc-black font-sans-serif no-underline text-2xl sm:text-3xl md:text-4xl hover:text-ncc-black font-black transform transition-transform hover:scale-[1.05] duration-700"
                href="mailto:nolancswe@gmail.com"
            >
                nolancswe@gmail.com
            </motion.a>
            </div>
        </div>
        </div>

        {/* Image */}
        <div className="w-48 sm:w-64 md:w-80 lg:w-[39%] order-2">
        <img
            src="/images/headshot-2026.jpg"
            className="w-full rounded-full"
            alt="professional headshot"
        />
        </div>
    </div>
    </div>
</div>
);
};

export default AboutHeadGraphic;