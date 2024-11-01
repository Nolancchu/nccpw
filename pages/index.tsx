import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"
import HomePageGraphic from "@/components/HomePageGraphic";
import AboutHeadGraphic from "@/components/AboutHeadGraphic";
import ProjectSection from "@/components/ProjectSection";
import ProjectCarousel from "@/components/ProjectCarousel"

export default function Home() {
  return (
    <div className="min-h-screen relative">

      {/* Background layer */}
      <div className="absolute inset-0 bg-ncc-beige bg-[radial-gradient(circle_900px_at_100%_200px,#015B52,transparent)] -z-10" />
      
      {/* Navigation with highest z-index */}
      <div className="relative z-50">
        <Navigation/>
      </div>

      {/* Content layers with lower z-index */}
      <div className="relative z-20">
          <HomePageGraphic/>
      </div>

      <div className="relative z-10">
        <AboutHeadGraphic/>
      </div>

      <div className="relative z-50">
        <ProjectCarousel/>
      </div>
      
      <div className="relative z-30">
        <Footer/>
      </div>
    </div>
  );
}

