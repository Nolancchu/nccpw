import React from "react"; 
import { Cormorant_Garamond } from 'next/font/google';
import { Inter } from "next/font/google";
import { FaReact } from "react-icons/fa";
import { motion, AnimatePresence, useCycle, rotate} from "framer-motion";
import ScrollingText from './ScrollingText.jsx'
import StaticElement from './StaticElement.jsx'

const garamond = Cormorant_Garamond({
    subsets: ['latin'], 
    weight: ['300'],
})

const int = Inter ({
    subsets: ['latin'],
    weight: ['600']
})

const HomePageGraphic = () => {
  return (
    <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
    >
    <div className="styles.container">
        <div className="flex flex-col relative overflow-x-hidden lg:flex-row  w-full mt-12">
            <StaticElement
                
                verticalPosition="0"
                horizontalPosition="10px"
                width="w-48"
                zIndex="z-20"
                className="-top-32 "
            >
                <ScrollingText
                    text="Nolan Chu " 
                    className="text-ncc-black"
                    verticalAlign="top"
                />
            </StaticElement>
            <div className="xl:mt-10 ml-16 w-full lg:w-3/4 z-10" >
                
                <div className="text-xl lg:text-[0rem]">
                    <span className={int.className}>WELCOME</span><br></br>
                </div>
                <div className="ml-8 mb-3 mt-24 text-xl align-middle lg:text-3xl max-lg:justify-self-center max-lg:w-6/12 lg:w-full">
                    <span className={garamond.className} >
                            Hello, my name is Nolan Chu, a third-year data science & economics undergraduate at the University of California, San Diego.
                            <br/><br/>
                            In my portfolio website, you can take a look at some of my projects and experiences, get to know a little more about me, and find ways to get in contact. Hope to hear from you soon!
                    </span>
                </div>   
            </div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 1.5 }}
            >
                <div className="flex justify-center items-start">
                    <img src='/images/dude.png' className="-mt-16 mr-16 h-1/2 w-1/2 z-50 scale-x-[-1]"></img>
                </div>
            </motion.div>
            
        </div>
        
    </div>
    </motion.div>
  );
};

export default HomePageGraphic;
