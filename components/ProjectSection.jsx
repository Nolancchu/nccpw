import ProjectCard from "./ProjectCard";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
const ProjectCards = [
    {
      name: "Datasaur Royale",
      image: <img alt={"Datasaur Royale thumbnail"}/>,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        name: "Title",
        image: <FaReact/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        name: "Title",
        image: <FaReact/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        name: "Title",
        image: <FaReact/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Title",
      image: <FaReact/>,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Title",
      image: <FaReact/>,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  
  const ProjectSection = () => {
    return (
        <div>
        <div className="flex w-full items-center justify-center">
          <Row className="w-11/12 items-center justify-center">
            {ProjectCards.map((card, index) => (
              <Col className="mb-20" xs={12} lg={6} key={index}>
                <ProjectCard
                  key={index}
                  name={card.name}
                  description={card.description}
                  image={card.image}
                />
                </Col>
            ))}
            </Row>
        </div>
        <div className="w-full h-8 bg-ncc-beige"/>
        </div>
    );
  };
  
  export default ProjectSection;
  