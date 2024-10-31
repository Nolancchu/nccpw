import React, { useState, useEffect } from 'react';

const BackgroundScrollingText = ({ 
    text = "This is scrolling text - ",
    speed = 60,
    direction = "left",
    className = "",
    opacity = "opacity-20",
    zIndex = "z-0",
    backgroundColor = "bg-transparent",
    // New vertical positioning props
    verticalPosition = "100px", // You can pass any CSS value like "100px", "25%", etc.
    verticalAlign = "bottom"    // "top", "center", or "bottom"
}) => {
const [position, setPosition] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
    setPosition((prev) => {
        const totalWidth = window.innerWidth;
        if (direction === "left" && Math.abs(prev) > totalWidth) {
        return 0;
        }
        if (direction === "right" && prev > totalWidth) {
        return -totalWidth;
        }
        return prev + (direction === "left" ? -1 : 1);
    });
    }, speed);

    return () => clearInterval(interval);
}, [text, speed, direction]);

// Get vertical alignment styles
const getVerticalStyles = () => {
    switch (verticalAlign) {
    case 'center':
        return 'top-1/2 -translate-y-1/2';
    case 'bottom':
        return 'bottom-0';
    default: // 'top'
        return 'top-10';
    }
};

return (
    <div className={`relative w-full h-full pointer-events-none ${backgroundColor} ${zIndex}`}>
    <div className={`absolute  ${getVerticalStyles()}`} style={{ top: verticalPosition }}>
        <div 
        className={`whitespace-nowrap w-full font-large text-8xl p-4 ${className} ${opacity}`}
        style={{ 
            transform: `translateX(${position}px)`,
            transition: 'transform 0.1s linear'
        }}
        >
        {text.repeat(1000)}
        </div>
    </div>
    </div>
);
};
export default BackgroundScrollingText;