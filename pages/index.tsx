import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"
import HomePageGraphic from "@/components/HomePageGraphic";
import HomePageNav from "@/components/HomePageNav";

export default function Home() {
  return (
    <div className='w-full h-full bg-ncc-beige overscroll-none'>
      <Navigation/>
      <HomePageGraphic/>
      <Footer/>
    </div>
  )
}
