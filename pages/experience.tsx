import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExperienceText from "@/components/ExperienceText";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    
    <div className="h-screen w-screen rotate-180 transform bg-ncc-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1.5 }}
        >
        <Navigation/>
        <ExperienceText/>
        <Footer/>
        </motion.div>
    </div>
  )
}