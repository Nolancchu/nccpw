import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";

const garamond = Cormorant_Garamond({
    subsets: ['latin'], 
    weight: ['700'],
})


const HomePageNav = () => {
  return (
    <div >
        <div className={`w-full h-[.1rem] bg-ncc-brown mb-12`} />
    
        <div className="flex flex-row w-full items-center justify-center bg-ncc-beige">
            <Link href="/portfolio" className="text-ncc-brown text-6xl hover:text-ncc-white" style={{ textDecoration: 'none' }}>[ Portfolio ]</Link>
            <div className="w-[.15rem] h-32 ml-10 mr-10 bg-ncc-black"/>
            <Link href="/experience" className="text-ncc-brown text-6xl hover:text-ncc-white" style={{ textDecoration: 'none' }}>[ Experience ]</Link>
            <div className="w-[.15rem] h-32 ml-10 mr-10 bg-ncc-black"/>
            <Link href="/about" className="text-ncc-brown text-6xl hover:text-ncc-white" style={{ textDecoration: 'none' }}>[ About ]</Link>
        </div>
        <div className="w-full h-12 bg-ncc-beige"/>
    </div>
  );
};

export default HomePageNav;
