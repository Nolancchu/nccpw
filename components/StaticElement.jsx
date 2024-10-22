import React from 'react';

const StaticElement = ({
children,
verticalPosition = '0px',   // Custom vertical position
horizontalPosition = '0px', // Custom horizontal position
width = 'w-screen',          // Width class
zIndex = 'z-0',            // Z-index class
className = '',            // Additional classes
}) => {
return (
<div 
    className={`
    absolute 
    pointer-events-none 
    ${width}
    ${zIndex}
    ${className}
    -top-${verticalPosition}
    left-${horizontalPosition}
    `}
>
    {children}
</div>
);
};

export default StaticElement;