import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"
import HomePageGraphic from "@/components/HomePageGraphic";
import AboutHeadGraphic from "@/components/AboutHeadGraphic";
import HomePageNav from "@/components/HomePageNav";
export default function Home() {
  return (
    <div className=' bg-ncc-beige overscroll-none'>
      <Navigation/>
      <HomePageGraphic/>
      <AboutHeadGraphic/>
      <Footer/>
    </div>
  )
}

