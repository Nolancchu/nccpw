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
  <div className="fixed w-full h-auto">
    <div className="flex flex-row justify-between items-center mt-8 z-40 mb-4">
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1.5 }}
        >
        <Navbar>
          <Navbar.Brand href="/" className="ml-20 -mt-2.5">
              <img 
                  src='/images/logo.png' 
                  className="w-16 h-16 transform transition-transform hover:scale-[1.15] duration-700" 
                  alt="logo" 
              />
          </Navbar.Brand>
        </Navbar>
      </motion.div>

      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1.5 }}
      >
        <div className="flex flex-col mr-12">
          <div className={int.className}>
            <Link 
              href="/portfolio" 
              className="text-lg text-ncc-black mr-4 ml-4 no-underline hover:text-ncc-beige transition-colors duration-[650ms]"
            >
              
              Portfolio
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-ncc-black origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
          <div className="h-0.5 w-24 bg-ncc-black ml-3"></div>
          <div className={int.className}>
            <Link 
              href="/experience" 
              className="text-lg text-ncc-black mr-4 ml-4 no-underline hover:text-ncc-beige transition-colors duration-[650ms]"
            >
              Experience
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-ncc-black origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
          <div className="h-0.5 w-24 bg-ncc-black ml-3"></div>
          <div className={int.className}>
            <Link 
              href="/about" 
              className="text-lg text-ncc-black mr-4 ml-4 no-underline hover:text-ncc-beige transition-colors duration-[650ms]"
            >
              About
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-ncc-black origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
  )
}

export default Navigation;