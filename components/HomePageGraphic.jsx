import React from "react"; 
import { Cormorant_Garamond } from 'next/font/google';
import { Inter } from "next/font/google";
import { motion, AnimatePresence, useCycle, rotate} from "framer-motion";
import ScrollingText from './ScrollingText.jsx'
import StaticElement from './StaticElement.jsx'
import AnimatedHeroText from './AnimatedHero.jsx'

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
            className="relative z-20 pointer-events-auto w-full min-h-screen"
        >
            <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-6 lg:px-8">
                {/* Main content container with responsive padding and centering */}
                <div className="relative w-full max-w-7xl mx-auto">
                    {/* Flex container for content alignment */}
                    <div className="flex flex-col items-center justify-center">
                        {/* Hero text section */}
                        <div className="">
                            <AnimatedHeroText />
                        </div>
                        
                        {/* Bouncing arrow with responsive sizing */}
                        <div className="animate-bounce mt-8 sm:mt-12 lg:mt-16">
                            <img 
                                src="/images/arrow.png" 
                                className="w-8 sm:w-10 md:w-12 lg:w-14 mx-auto" 
                                alt="scroll down arrow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HomePageGraphic;