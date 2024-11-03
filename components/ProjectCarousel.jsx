import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCarousel = () => {
const projects = [
{
    title: "Datasaur Royale",
    description: "With Python and Pygame my team and I created a simulation of natural selection utilizing genetic algorithms to simulate evolution within generations of dinosaurs.",
    technologies: ["Python", "Pygame"],
    image: "/images/datasaurthumb.png",
    link: "https://github.com/Nolancchu/DatasaurRoyale"
},
{
    title: "NBA Logistic Regression Model",
    description: "Logistic Regression Model meant to predict the winner of NBA games given a plethora of advanced statistics. Built webscraper to collect data from the ground up, scraping over 2 million points of data.",
    technologies: ["Python", "Scikit-learn", "Flask", "Selenium"],
    image: "/images/nbamodel.webp",
    link: "https://github.com/Nolancchu/NBA-Prediction-Model"
},
{
    title: "200 Years: Analysing Champion Age",
    description: "Statistical Analysis and predictive model concerning champion age - since release/rework - of champions in League of Legends and how that affects their winrate",
    technologies: ["Python", "Pandas", "Scikit-learn", "Statistical Analysis"],
    image: "/images/200years.png",
    link: "https://nolancchu.github.io/200-Years/"
}
];

const [currentIndex, setCurrentIndex] = useState(0);
const [direction, setDirection] = useState('right');
const [isAnimating, setIsAnimating] = useState(false);

const nextProject = () => {
if (isAnimating) return;
setDirection('right');
setIsAnimating(true);
setTimeout(() => {
    setCurrentIndex((prevIndex) => prevIndex === projects.length - 1 ? 0 : prevIndex + 1);
    setIsAnimating(false);
}, 300);
};

const prevProject = () => {
if (isAnimating) return;
setDirection('left');
setIsAnimating(true);
setTimeout(() => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projects.length - 1 : prevIndex - 1);
    setIsAnimating(false);
}, 300);
};

const goToProject = (index) => {
if (isAnimating) return;
setDirection(index > currentIndex ? 'right' : 'left');
setIsAnimating(true);
setTimeout(() => {
    setCurrentIndex(index);
    setIsAnimating(false);
}, 300);
};

return (
<div className="w-full min-h-[80vh] items-start max-w-6xl mx-auto px-4">
    <h2 className="text-6xl font-bold text-center mb-8">Featured Projects</h2>
    
    {/* Added relative positioning to create stacking context */}
    <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg">
    {/* Content wrapper with its own stacking context */}
    <div className="relative p-6">
        {/* Project content with high z-index */}
        <div 
        className={`
            relative z-20 transform transition-all duration-300 ease-in-out
            ${isAnimating && direction === 'right' ? '-translate-x-full opacity-0' : ''}
            ${isAnimating && direction === 'left' ? 'translate-x-full opacity-0' : ''}
            ${!isAnimating ? 'translate-x-0 opacity-100' : ''}
        `}
        >
        <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Project Image */}
            <div className="w-full md:w-1/2">
            <img 
                src={projects[currentIndex].image} 
                alt={projects[currentIndex].title}
                className="rounded-lg shadow-lg w-full h-auto"
            />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-4xl font-black text-ncc-black">
                {projects[currentIndex].title}
            </h3>
            <p className="text-md text-ncc-black">
                {projects[currentIndex].description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
                {projects[currentIndex].technologies.map((tech, index) => (
                <span 
                    key={index}
                    className="px-3 py-1 bg-ncc-green text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >
                    {tech}
                </span>
                ))}
            </div>

            {/* Project Link with pointer-events-auto to ensure clickability */}
            <a 
                href={projects[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-ncc-black font-serif hover:underline pointer-events-auto"
            >
                View Project →
            </a>
            </div>
        </div>
        </div>

        {/* Navigation Buttons with higher z-index */}
        <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center z-30 pointer-events-none">
        <button 
            onClick={prevProject}
            disabled={isAnimating}
            className="p-2 rounded-full bg-ncc-grey dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors -ml-4 disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto"
            aria-label="Previous project"
        >
            <ChevronLeft className="w-6 h-5 text-gray-800 dark:text-white" />
        </button>
        <button 
            onClick={nextProject}
            disabled={isAnimating}
            className="p-2 rounded-full bg-ncc-grey dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors -mr-4 disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto"
            aria-label="Next project"
        >
            <ChevronRight className="w-6 h-5 text-gray-800 dark:text-white" />
        </button>
        </div>

        {/* Project Counter Dots with highest z-index */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
        {projects.map((_, index) => (
            <button
            key={index}
            onClick={() => goToProject(index)}
            disabled={isAnimating}
            className={`w-2 h-2 rounded-full transition-colors disabled:cursor-not-allowed ${
                index === currentIndex 
                ? 'bg-blue-600 dark:bg-blue-400' 
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to project ${index + 1}`}
            />
        ))}
        </div>
    </div>
    </div>
</div>
);
};

export default ProjectCarousel;