import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
  Hi Everyone, I am <span className="purple">Mayank Kumar </span>
  from <span className="purple"> Kanpur, India.</span>
  <br />
  I am currently pursuing a <span className="purple">Bachelor of Technology in Computer Science</span> with a specialization in <span className="purple">Artificial Intelligence</span>.
  <br />
  Beyond development, I have demonstrated strong algorithmic problem-solving skills by securing a <span className="purple">Global Rank of 3894</span> in Round 2 of <span className="purple">TCS CodeVita Season 13</span>. I also showcased my ability to innovate under pressure by competing in the <span className="purple">QubitX Hackathon</span>, working on real-world technical challenges.
  <br />
  <br />
  Apart from coding, some other activities that I love to do!
</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />  Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading News
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mayank</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;






