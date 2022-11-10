import React from "react";
import "./Covered.scss";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import DailySocial from "../../../../assets/images/dailysocial.png";
import Liputan6 from "../../../../assets/images/liputan6.png";
import Yahoo from "../../../../assets/images/yahoo.png";
import Cnn from "../../../../assets/images/cnn.png";
import Merdeka from "../../../../assets/images/merdeka.jpeg";

export default function Covered() {
  return (
    <section id="covered">
      <Container>
        <h1>Diliput Oleh</h1>
        <div>
          <img src={DailySocial} alt="Daily Social Icon" />
          <img src={Liputan6} alt="Liputan 6 Icon" />
          <img src={Yahoo} alt="Yahoo Icon" />
          <img src={Cnn} alt="CNN Icon" />
          <img src={Merdeka} alt="Merdeka Icon" />
        </div>
      </Container>
    </section>
  );
}
