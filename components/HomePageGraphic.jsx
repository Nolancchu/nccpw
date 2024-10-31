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
        <div className="flex flex-col relative overflow-x-hidden lg:flex-row w-full h-screen">
        <StaticElement
            verticalPosition=""
            horizontalPosition="10px"
            width="w-48"
            zIndex="z-20"
            className="-top-32"
        >
            <ScrollingText
            text="Nolan Chu "
            className="text-ncc-black"
            verticalAlign="top"
            verticalPosition="260px"
            />
        </StaticElement>
        {/* Add the AnimatedHeroText inside the same container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-4 w-full">
            <AnimatedHeroText />
        </div>
        </div>
    </div>
    </motion.div>
);
};

export default HomePageGraphic;
