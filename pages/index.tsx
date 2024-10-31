import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"
import HomePageGraphic from "@/components/HomePageGraphic";
import AboutHeadGraphic from "@/components/AboutHeadGraphic";
import HomePageNav from "@/components/HomePageNav";
export default function Home() {
  return (
      <div className="bg-ncc-beige h-full w-full bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#015B52,transparent)]">
      <Navigation/>
      <HomePageGraphic/>
      <AboutHeadGraphic/>
      <Footer/>
      </div>
  )
}
