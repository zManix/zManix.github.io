import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manaia Roserens </span>
            from <span className="purple"> Biel, Switzerland.</span>
            <br /> I am a first year student pursuing an Apprenticeship as a <span className="purple">Application Developer</span> at <span className="purple">Swisscom</span>.

            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Recording/Creating/Writing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Mountainbiking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "When you go out, go out with a bang."{" "}
          </p>
          <footer className="blockquote-footer">Playboi Carti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
