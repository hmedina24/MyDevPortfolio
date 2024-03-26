import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello world! I'm <span className="purple">Hector Medina </span>
            based in <span className="purple"> Boston, Massachusetts, United States of America.</span>
            <br />
            I'm a passionate software developer engineer with a solid background in React.JS, TypeScript, JavaScript, Java and Python.
            <br />
            I earned my Bachelor's Degree from Suffolk University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sharpen My DJ Skills 
            </li>
            <li className="about-activity">
              <ImPointRight /> Stay Active: Work-out, Hike  
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel The World 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."{" "}
          </p>
          <footer className="blockquote-footer">John Woods</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
