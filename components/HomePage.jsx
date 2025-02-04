import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"
import HomePageGraphic from "@/components/HomePageGraphic";
import AboutHeadGraphic from "@/components/AboutHeadGraphic";
import ProjectCarousel from "@/components/ProjectCarousel";
import Experience from "@/components/Experience";
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
                <div className="absolute inset-0 bg-ncc-beige bg-[radial-gradient(circle_950px_at_100%_200px,#015B52,transparent)] -z-10" />
                
                {/* Navigation */}
                <div className="fixed top-0 left-0 right-0 z-30">
                    <Navigation font={int} />
                </div>

                {/* Main content */}
                <main className="relative">
                    <section id="main" className="relative z-20">
                        <HomePageGraphic/>
                    </section> 

                    <section id="about" className="relative z-10">
                        <AboutHeadGraphic/>
                    </section>
                    <section id="experience" className="relative z-10">
                        <Experience/>
                    </section>
                    <section id="projects" className="relative z-10">
                        <ProjectCarousel/>
                    </section>
                </main>

                <div className="relative z-10">
                    <Footer/>
                </div>
            </div>
        </div>
    );
};
    
export default HomePage;