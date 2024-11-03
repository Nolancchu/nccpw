import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";

const int = Inter({
    subsets: ['latin'],
    weight: ['600']
});

const AnimatedHeroText = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    const words = [
        "Nolan Chu",
        "Data Driven",
        "Team Oriented",
        "Growth Minded",
        "Making it Happen"
    ];

    useEffect(() => {
        const startDelay = setTimeout(() => {
            setHasStarted(true);
        }, 1000);

        return () => clearTimeout(startDelay);
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

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
        <div className="min-h-screen-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-screen text-center">
                <div className="min-h-[6rem] sm:min-h-[8rem] md:min-h-[10rem] flex items-center justify-center mb-4">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-ncc-black">
                        <div className={int.className}>
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </div>
                    </h1>
                </div>
                <p className="text-ncc-black opacity-70 font-black text-lg sm:text-xl md:text-2xl px-4">
                    Welcome, I&apos;m Nolan Chu, a Data Science &amp; Economics{' '} <br></br>
                    <span className="hidden sm:inline">undergraduate at the University of California, San Diego</span>
                    <span className="sm:hidden">undergraduate at UCSD</span>
                </p>
            </div>
        </div>
    );
};

export default AnimatedHeroText;