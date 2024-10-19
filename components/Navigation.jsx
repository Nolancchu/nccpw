import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import { motion, AnimatePresence, useCycle, rotate} from "framer-motion";
import { FaReact } from "react-icons/fa";
import { Inter } from "next/font/google";

const int = Inter ({
    subsets: ['latin'],
    weight: ['600']
})

const Navigation = () => {
    return (
    <div className="w-auto h-full flex flex-col ">
      <div className="w-full h-2 bg-ncc-beige"/>
      <div className="flex flex-row justify-between mt-8 z-40 mb-12">
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1.5 }}
          >
          <Navbar>
            <Navbar.Brand href="/" className="ml-32">
                    <FaReact size={35} className="md:scale-150 "/>
            </Navbar.Brand>
          </Navbar>
        </motion.div>

        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1.5 }}
        >
          <div className="flex flex-row mt-4">
            <div className={int.className}>
              <a  href="/portfolio" className="text-2xl text-ncc-black mr-4 ml-4 no-underline">Portfolio</a>
            </div>
            <div className={int.className}>
              <a  href="/experience" className="text-2xl text-ncc-black mr-4 ml-4 no-underline">Experience</a>
            </div>
            <div className={int.className}>
              <a  href="/about" className="text-2xl text-ncc-black mr-20 ml-4 no-underline">About</a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
    )
}

export default Navigation;
