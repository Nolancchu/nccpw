import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHeadGraphic from "@/components/AboutHeadGraphic";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className='w-full h-full bg-ncc-beige overflow-clip'>
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1.5 }}
        >
        <Navigation/>
        <div className="w-full h-12 bg-ncc-beige"/>
        <AboutHeadGraphic/>
        <Footer/>
        </motion.div>
    </div>
  )
}