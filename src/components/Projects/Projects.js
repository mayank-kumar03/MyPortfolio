import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Tic_tac_toe from "../../Assets/Projects/Tic_tac_toe.png";
import Video_Wallah from "../../Assets/Projects/Video_Wallah.png";
import Medwise from "../../Assets/Projects/Medwise.png";
import calculator from "../../Assets/Projects/calculator.webp";
import Task_manager from "../../Assets/Projects/Task_manager.png";
import Math_score_prediction from "../../Assets/Projects/Math_score_prediction.png";
import user_verification from "../../Assets/Projects/user_verification.webp";
import Smart_waste from"../../Assets/Projects/Smart_waste.png";
import Documind from "../../Assets/Projects/Documind.png";
import Ecom from "../../Assets/Projects/Ecom.png";

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
              imgPath={Smart_waste}
              isBlog={false}
              title="Smart waste Recycle System(ScrapSmart)"
              description="The Smart Recycle System is an AI-powered platform that helps users identify recyclable materials and provides creative DIY reuse ideas. It uses a microservices architecture to process images and generate intelligent recommendations."
              ghLink="https://github.com/kTechKeshav/Smart-Waste-Recycle-system-Major-Project-/tree/Mayank-Kumar"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Medwise}
              isBlog={false}
              title="Medwise"
              description="Medwise, a comprehensive web application designed to enhance accessibility and convenience in healthcare. Medwise enables patients to book appointments with doctors, visit clinics, receive virtual prescriptions, and explore various healthcare services. The platform ensures seamless interaction between patients and healthcare providers through features such as real-time communication, secure access to medical records, and emergency assistance."
              ghLink="https://github.com/mayank-kumar03/Medwise-Smart-healthcare-"
              demoLink="https://medwise-smart-healthcare.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Video_Wallah}
              isBlog={false}
              title="Video Wall"
              description="Video Wall is a modern video hosting platform inspired by YouTube. It provides a seamless and responsive user interface for browsing, watching, and interacting with video content. The platform includes a robust backend for managing user authentication, video uploads, and interactions."
              ghLink="https://github.com/mayank-kumar03/My-Youtube"
              demoLink="https://mk-video-wall.netlify.app/"
           
                        
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={user_verification}
              isBlog={false}
              title="Churning Bank user_verification"
              description="Implemented a deep learning–based user authentication system using Artificial Neural Networks (ANN). Features include data preprocessing (label encoding & scaling), model persistence, and a Streamlit web interface for secure, real-time predictions."
              ghLink="https://github.com/mayank-kumar03/User_verification_system"
              demoLink="https://userverificationsystem-nwueohadazz8h9caxn9uvx.streamlit.app/"
            />
          </Col>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={Math_score_prediction}
    isBlog={false}
    title="Student Exam Performance Indicator"
    description="An end-to-end machine learning project that predicts a student's math score based on demographic and academic information. Demonstrates the complete ML workflow: data ingestion, preprocessing, model training, evaluation, and deployment with a modern Flask web interface. Features real-time prediction, robust pipelines, model persistence, and a user-friendly UI."
    ghLink="https://github.com/mayank-kumar03/Maths_score_prediction"
    demoLink="https://maths-score-prediction-lpvz.onrender.com"
  />
</Col>
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={Documind}
              isBlog={false}
              title="Documind-Summary_Assistant"
              description="Documind Summary Assistant is a smart full-stack web app that helps you upload any document (PDF/Image) and get:
 AI-powered Summaries
and  Improvement Suggestions"
              ghLink="https://github.com/mayank-kumar03/Documind-Summary_Assistant-"
              demoLink="https://documind-summary-assistant.vercel.app/"
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
              imgPath={Ecom}
              isBlog={false}
              title="E-Com Web Application"
              description="A full-stack e-commerce web application built using React (Vite) for the frontend and Spring Boot for the backend.

The project uses an H2 In-Memory Database, making development simple, fast, and lightweight."
              ghLink="https://github.com/mayank-kumar03/E-Com"
              
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
