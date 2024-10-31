import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";

const int = Inter ({
    subsets: ['latin'],
    weight: ['600']
})

const AnimatedHeroText = () => {
const [displayText, setDisplayText] = useState('');
const [currentWordIndex, setCurrentWordIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [hasStarted, setHasStarted] = useState(false);

const words = [
"Data Driven",
"Team Oriented",
"Growth Minded",
"Making it Happen"
];

// Initial delay effect
useEffect(() => {
const startDelay = setTimeout(() => {
    setHasStarted(true);
}, 1000); // 1 second delay before starting

return () => clearTimeout(startDelay);
}, []);

useEffect(() => {
if (!hasStarted) return; // Don't start typing until initial delay is complete

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenWords = 2000;

const handleTyping = () => {
    const currentWord = words[currentWordIndex];
    
    if (!isDeleting) {
    if (displayText !== currentWord) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
    } else {
        setTimeout(() => setIsDeleting(true), pauseBetweenWords);
    }
    } else {
    if (displayText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
    }
    }
};

const timer = setTimeout(
    handleTyping,
    isDeleting ? deletingSpeed : typingSpeed
);

return () => clearTimeout(timer);
}, [displayText, currentWordIndex, isDeleting, hasStarted]);

return (
<div className="flex items-center justify-center">
    <div className="text-center">
    <div className="h-24 md:h-32 flex items-center justify-center mb-4">
        <h1 className="text-9xl md:text-9xl font-bold text-ncc-black">
        <div className={int.className}>
            {displayText}
            <span className="animate-pulse">|</span>
        </div>
        </h1>
    </div>
    <p className="text-ncc-black opacity-70 font-black text-2xl md:text-2xl">
        Welcome, I'm Nolan Chu, a Data Science & Economics <br></br>undergraduate at the University of California, San Diego
    </p>
    </div>
</div>
);
};

export default AnimatedHeroText;