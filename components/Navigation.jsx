import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import { motion, AnimatePresence, useCycle, rotate} from "framer-motion";
import { FaReact } from "react-icons/fa";
import { Inter } from "next/font/google";
import Link from 'next/link'

const int = Inter ({
    subsets: ['latin'],
    weight: ['600']
})

const Navigation = () => {
    return (
    <div className="w-auto h-full flex flex-col ">
      <div className="w-full h-2 bg-ncc-beige"/>
      <div className="flex flex-row justify-between mt-8 z-40 mb-4">
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1.5 }}
          >
          <Navbar>
            <Navbar.Brand href="/" className="ml-24">
                <img src='/images/logo.png' className="w-16 h-16"></img>
            </Navbar.Brand>
          </Navbar>
        </motion.div>

        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1.5 }}
        >
          <div className="flex flex-row mt-7">
            <div className={int.className}>
              <Link  href="/portfolio" className="text-2xl text-ncc-black mr-4 ml-4 no-underline">Portfolio</Link>
            </div>
            <div className={int.className}>
              <Link  href="/experience" className="text-2xl text-ncc-black mr-4 ml-4 no-underline">Experience</Link>
            </div>
            <div className={int.className}>
              <Link  href="/about" className="text-2xl text-ncc-black mr-20 ml-4 no-underline">About</Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
    )
}

export default Navigation;
