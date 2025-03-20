import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Tic_tac_toe from "../../Assets/Projects/Tic_tac_toe.png";
import Video_Wallah from "../../Assets/Projects/Video_Wallah.webp";
import Medwise from "../../Assets/Projects/Medwise.png";
import calculator from "../../Assets/Projects/calculator.webp";
import Task_manager from "../../Assets/Projects/Task_manager.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Medwise}
              isBlog={false}
              title="Medwise"
              description="Medwise, a comprehensive web application designed to enhance accessibility and convenience in healthcare. Medwise enables patients to book appointments with doctors, visit clinics, receive virtual prescriptions, and explore various healthcare services. The platform ensures seamless interaction between patients and healthcare providers through features such as real-time communication, secure access to medical records, and emergency assistance."
              ghLink="https://github.com/mayank-kumar03/Medwise"
              demoLink="https://mayank-kumar03.github.io/Medwise/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Task_manager}
              isBlog={false}
              title="Task Manager"
              description="Task Manager is a basic Full-Stack Web Application designed to help you efficiently create, manage, and complete tasks. Built using the MERN stack (MongoDB, Express.js, React, Node.js), designed to create, manage, and complete tasks efficiently. This project follows REST API principles and includes proper error handling and data validation with Zod."
              ghLink="https://github.com/mayank-kumar03/Task_manager_mern"
              demoLink="https://task-manager-frontend-bfl7.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Video_Wallah}
              isBlog={false}
              title="Video Wall"
              description="This project is the backend for a YouTube-like application, providing a comprehensive set of features that allow users to register, log in, manage their profiles, and interact with video content. The backend is built using Node.js, Express, and MongoDB, and it utilizes JWT for authentication and Cloudinary for image uploads."
              ghLink="https://github.com/mayank-kumar03/My-Youtube"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tic_tac_toe}
              isBlog={false}
              title="Tic Tac Toe"
              description="A practical implemntation of javascript concept Tic Tac Toe is a classic two-player game where the objective is to get three of your marks in a row (horizontally, vertically, or diagonally) on a 3x3 grid. his project demonstrates the implementation of the game using web technologies."
              ghLink="https://github.com/mayank-kumar03/Tic-Tac-Toe-games"
              demoLink="https://mayank-kumar03.github.io/Tic-Tac-Toe-games/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title=" A web-based calculator"
              description="This web-based calculator performs addition, subtraction, multiplication, division, and modulus operations. Built with HTML, CSS, and JavaScript, it features a responsive interface and interacts with a backend server using the fetch API and async/await. The project optimizes performance with debouncing, ensuring efficient API calls. It serves as a practical example of frontend-backend communication and JavaScript event handling."
              ghLink="https://github.com/mayank-kumar03/Calculator_mini_mernstack_project"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
