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
    >
    <div className="styles.container">
    <div className="flex flex-col items-center relative overflow-x-hidden lg:flex-row w-full h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-32 w-full flex flex-col items-center">
        <AnimatedHeroText />
            <div className="animate-bounce">
                <img src="/images/arrow.png" className="mx-auto w-[12%] translate-y-28" alt="arrow" />
            </div>
        </div>
    </div>
    </div>

    </motion.div>
);
};

export default HomePageGraphic;
