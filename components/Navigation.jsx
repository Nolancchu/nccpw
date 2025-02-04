import { motion } from 'framer-motion';
import { Navbar } from 'flowbite-react';
import Link from 'next/link';

const Navigation = ({ font }) => {
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  // Create a className that works with or without the font
  const linkContainerClass = font?.className || '';

  return (
    <div className="fixed w-full h-auto">
      <div className="flex flex-row justify-between items-center mt-8 mb-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
            <div href="#main" className="ml-20 -mt-2.5 cursor-pointer">
              <img 
                src='/images/logo.png' 
                onClick={(e) => handleClick(e, 'main')}
                className="w-16 h-16 transform transition-transform hover:scale-[1.15] duration-700" 
                alt="logo" 
              />
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="flex flex-col items-center mr-16">
            <div className={linkContainerClass}>
              <Link 
                href="#about"
                onClick={(e) => handleClick(e, 'about')}
                className="text-xl text-ncc-black no-underline hover:text-ncc-beige transition-colors duration-[650ms]"
              >
                About
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-ncc-black origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </div>
            <div className="h-[.09rem] my-1 w-24 bg-ncc-black "></div>

            <div className={linkContainerClass}>
              <Link 
                href="#experience"
                onClick={(e) => handleClick(e, 'experience')}
                className="text-xl text-ncc-black no-underline hover:text-ncc-beige transition-colors duration-[650ms]"
              >
                Experience
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-ncc-black origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </div>
            <div className="h-[.09rem] my-1 w-24 bg-ncc-black"></div>

            <div className={linkContainerClass}>
              <Link 
                href="#projects"
                onClick={(e) => handleClick(e, 'projects')}
                className="text-xl text-ncc-black no-underline hover:text-ncc-beige transition-colors duration-[650ms]"
              >
                Projects
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-ncc-black origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </div>
            <div className="h-[.09rem] my-1 w-24 bg-ncc-black"></div>

            <div className={linkContainerClass}>
                <motion.a
                target="_blank"
                className="text-xl text-ncc-black no-underline hover:text-ncc-beige transition-colors duration-[650ms]"
                href="https://drive.google.com/file/d/1CQogbAPU8DW3aonNhC2jbJdzZ2Q6_CoI/view?usp=sharing"
                >
                Resume
                </motion.a>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-ncc-black origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navigation;