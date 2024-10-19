import React from "react";
import { Bebas_Neue } from "next/font/google";

const Bebas = Bebas_Neue ({
    subsets: ['latin'],
    weight:['400']
})

const ProjectCard = ({
  name,
  image,
  description,
}) => {
  return (
    <div className="flex flex-col w-12/12 h-full bg-ncc-beige outline outline-2 rounded-3xl ml-4 mr-4">
        <div className="flex w-full h-auto justify-center items-center overflow-clip">
            <div className="w-4/12 aspect-square p-4 flex items-center justify-center">
                {image}
            </div>
        </div>

        <div className="w-full h-[.2rem] bg-ncc-black z-10"/>
        
        <div className="ml-6 mt-3">
            <div className="text-4xl mt-2">{name}</div>
            <div className="text-xl mb-6 w-11/12">{description}</div>
        </div>
    </div>
  );
};

export default ProjectCard;
