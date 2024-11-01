import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"
import HomePageGraphic from "@/components/HomePageGraphic";
import AboutHeadGraphic from "@/components/AboutHeadGraphic";
import ProjectCarousel from "@/components/ProjectCarousel";
import { Cormorant_Garamond } from 'next/font/google';
import { Inter } from "next/font/google";

const garamond = Cormorant_Garamond({
    subsets: ['latin'], 
    weight: ['300'],
})
  
const int = Inter ({
    subsets: ['latin'],
    weight: ['600']
})

const HomePage = () => {
    return (
    <div className="min-h-screen"> 
        <div className="min-h-screen relative">

        {/* Background layer */}
        <div className="absolute inset-0 bg-ncc-beige bg-[radial-gradient(circle_900px_at_100%_200px,#015B52,transparent)] -z-10" />
        
        {/* Navigation with highest z-index */}
        <div className="relative z-50">
            <Navigation font={int} />
        </div>

        {/* Content layers with lower z-index */}
        <section id="main">
            <div className="relative z-20">
                <HomePageGraphic/>
            </div>
        </section> 
        
        <section id="about">
            <div className="relative z-10">
                <AboutHeadGraphic/>
            </div>
        </section>
        
        <section id="projects">
            <div className="relative z-40">
                <ProjectCarousel/>
            </div>
        </section>
        <div className="relative z-30">
            <Footer/>
        </div>
    </div>
</div>
);
};
    
export default HomePage;