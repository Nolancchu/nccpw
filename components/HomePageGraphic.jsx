import React from "react"; 
import { Cormorant_Garamond } from 'next/font/google';
import { Inter } from "next/font/google";
import { FaReact } from "react-icons/fa";
import { motion, AnimatePresence, useCycle, rotate} from "framer-motion";

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
          transition={{ duration: 1.5 }}
    >
    <div className="styles.container">
        <div className="flex flex-col lg:flex-row overflow-clip w-full mt-10">

            <div className="xl:mt-10 ml-16 w-full lg:w-1/2 z-10" >
                <div className="text-[0rem] lg:text-9xl ">
                    <span className={garamond.className}>TEMP</span><br></br>
                    <span className={garamond.className}>TEMPO</span><br></br>
                    <span className={int.className}>TEMPORARY</span><br></br>
                </div>
                <div className="text-xl lg:text-[0rem]">
                    <span className={int.className}>WELCOME</span><br></br>
                </div>
                <div className="ml-1 mb-3 text-xl lg:text-2xl max-lg:justify-self-center max-lg:w-6/12 lg:w-9/12">
                    <span className={garamond.className}>Hello, my name is Nolan Chu, a second-year data science & economics undergraduate at the University of California, San Diego.</span>
                </div>   
            </div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 1.5 }}
            >
                <div className="flex justify-center items-start">
                    <FaReact size={550} className=" max-md:scale-50 md:max-xl:scale-75"/>
                </div>
            </motion.div>
            
        </div>
        
    </div>
    </motion.div>
  );
};

export default HomePageGraphic;
