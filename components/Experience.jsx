import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ role, company, duration, description, technologies, logoUrl }) => (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="w-full bg-white rounded-lg p-6 mb-12"
    >
    <div className="flex flex-col sm:flex-row gap-6 mt-4 mb-4">
        {/* Logo Section */}
        <div className="flex items-start justify-center sm:justify-start">
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
            {logoUrl ? (
            <img 
                src={logoUrl} 
                alt={`${company} logo`} 
                className="w-full h-full object-contain p-2"
            />
            ) : (
            <div className="w-full h-full flex items-center justify-center bg-ncc-brown/10 text-ncc-brown font-bold text-xl">
                {company.charAt(0)}
            </div>
            )}
        </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-4">
        <div className="space-y-2">
            <h3 className="font-black text-2xl sm:text-3xl text-ncc-black">
            {role}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-lg sm:text-xl font-bold text-ncc-brown">
                {company}
            </span>
            <div className="hidden sm:block bg-ncc-black h-4 w-[0.18rem]"></div>
            <span className="text-lg sm:text-xl text-gray-600">
                {duration}
            </span>
            </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-1000">
            {description}
        </p>

        </div>
    </div>
    </motion.div>
);

const Experience = () => {
const experiences = [
{
    role: "Research Assistant",
    company: "Joshua Blumenstock's Group",
    duration: "Winter 2024 - Present",
    description: "Automated data cleaning, quality, and aggregation pipelines concerning government surveys for use in poverty alleviation research.",
    logoUrl: "/images/research-Logo.png" 
},
{
    role: "Data Science Intern",
    company: "IDX Exchange",
    duration: "Winter 2024 - Present",
    description: "Developing & optimizing machine learning models for use in the field of real estate. Creating extensive documentation and presentation materials to present to board & stakeholders.",
    logoUrl: "/images/IDX-Logo.jpeg" 
},
{
    role: "Data Science Workshop Chair",
    company: "Data Science Student Society",
    duration: "Winter 2023 - Present",
    description: "Writing & presenting hands-on data science workshops, teaching fundamental concepts and practical applications to undergraduate students. Developing comprehensive curriculum and interactive learning materials.",
    logoUrl: "/images/DS3-Logo.png"
}
];

return (
<div className="w-full min-h-[40vh] flex justify-center items-start px-4 sm:px-6 lg:px-8 py-8 mb-12 sm:mb-16 lg:mb-20">
    <div className="w-full max-w-7xl">
    <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-black text-4xl sm:text-5xl md:text-6xl mb-16 text-center"
    >
        Experience
    </motion.h1>
    <div className="space-y-8">
        {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
        ))}
    </div>
    </div>
</div>
);
};

export default Experience;