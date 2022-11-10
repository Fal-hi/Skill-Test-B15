import React from "react";
import "./Technology.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Android from "../../../../assets/images/android.png";
import Bootstrap from "../../../../assets/images/bootstrap.png";
import Ci from "../../../../assets/images/ci.png";
import Css from "../../../../assets/images/css.png";
import Firebase from "../../../../assets/images/firebase.png";
import Git from "../../../../assets/images/git.png";
import Html from "../../../../assets/images/html.png";
import Java from "../../../../assets/images/java.png";
import Javascript from "../../../../assets/images/js.png";
import JQuery from "../../../../assets/images/jquery.png";
import Kotlin from "../../../../assets/images/kotlin.png";
import Nodejs from "../../../../assets/images/nodejs.png";
import Python from "../../../../assets/images/python.png";
import Php from "../../../../assets/images/php.png";
import Reactjs from "../../../../assets/images/react.png";
import Mysql from "../../../../assets/images/mysql.png";
import Swift from "../../../../assets/images/swift.png";

export default function Technology() {
  return (
    <section id="technologies">
      <Container fluid>
        <h1>
          Dapatkan Bantuan dari Ribuan Ahli dan Professional Programmer di
          Seluruh Indonesia
        </h1>
        <h5>
          Dari Berbagai Bahasa Pemrograman, Framework, Tools Coding, dan Contoh
          Pengembangan Proyek
        </h5>
        {/* <Row>
          {LIST_ICONS.map((li) => (
            <div key={li.id} className="techs">
              <div>
                <img src={li.icon} alt={li.ket} />
              </div>
              <span>{li.ket}</span>
            </div>
          ))}
        </Row> */}
        {/* Row 1 */}
        <Row>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Android} alt="Android Icon" />
            </div>
            <span>Android</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Bootstrap} alt="Bootstrap Icon" />
            </div>
            <span>Bootstrap</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Ci} alt="Code Igniter Icon" />
            </div>
            <span>Code Igniter</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Css} alt="CSS Icon" />
            </div>
            <span>CSS</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Firebase} alt="Firebase Icon" />
            </div>
            <span>Firebase</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Git} alt="Git Icon" />
            </div>
            <span>Git</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Html} alt="HTML Icon" />
            </div>
            <span>HTML</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Java} alt="Java Icon" />
            </div>
            <span>Java</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Javascript} alt="Javascript Icon" />
            </div>
            <span>Javascript</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={JQuery} alt="JQuery Icon" />
            </div>
            <span>JQuery</span>
          </Col>
          {/* Row 2 */}
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Kotlin} alt="Kotlin Icon" />
            </div>
            <span>Kotlin</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Nodejs} alt="Node JS Icon" />
            </div>
            <span>Node JS</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Python} alt="Python Icon" />
            </div>
            <span>Python</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Php} alt="PHP Icon" />
            </div>
            <span>PHP</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Reactjs} alt="React JS Icon" />
            </div>
            <span>React JS</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Mysql} alt="MySQL Icon" />
            </div>
            <span>SQL</span>
          </Col>
          <Col lg={1} md={2} xs={4}>
            <div>
              <img src={Swift} alt="Swift Icon" />
            </div>
            <span>Swift</span>
          </Col>
        </Row>
        <a href="#" className="btn">
          Ajukan Pertanyaan
        </a>
      </Container>
    </section>
  );
}

// const LIST_ICONS = [
//   {
//     id: 1,
//     icon: Android,
//     ket: "Android",
//   },
//   {
//     id: 2,
//     icon: Bootstrap,
//     ket: "Bootstrap",
//   },
//   {
//     id: 3,
//     icon: Ci,
//     ket: "Code Igniter",
//   },
//   {
//     id: 4,
//     icon: Css,
//     ket: "CSS",
//   },
//   {
//     id: 5,
//     icon: Firebase,
//     ket: "Firebase",
//   },
//   {
//     id: 6,
//     icon: Git,
//     ket: "Git",
//   },
//   {
//     id: 7,
//     icon: Html,
//     ket: "HTML",
//   },
//   {
//     id: 8,
//     icon: Java,
//     ket: "Java",
//   },
//   {
//     id: 9,
//     icon: Javascript,
//     ket: "Javascript",
//   },
//   {
//     id: 10,
//     icon: JQuery,
//     ket: "JQuery",
//   },
//   {
//     id: 11,
//     icon: Kotlin,
//     ket: "Kotlin",
//   },
//   {
//     id: 12,
//     icon: Nodejs,
//     ket: "Node JS",
//   },
//   {
//     id: 13,
//     icon: Python,
//     ket: "Python",
//   },
//   {
//     id: 14,
//     icon: Php,
//     ket: "PHP",
//   },
//   {
//     id: 15,
//     icon: Reactjs,
//     ket: "React JS",
//   },
//   {
//     id: 16,
//     icon: Mysql,
//     ket: "SQL",
//   },
//   {
//     id: 17,
//     icon: Swift,
//     ket: "Swift",
//   },
// ];
