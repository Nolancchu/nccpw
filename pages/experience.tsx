import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExperienceText from "@/components/ExperienceText";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className='w-full h-full bg-ncc-beige'>
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