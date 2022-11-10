import React from "react";
import "./Feature.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Icon4 from "../../../../assets/images/icon4.png";
import Icon5 from "../../../../assets/images/icon5.png";
import Icon6 from "../../../../assets/images/icon6.png";

export default function Feature() {
  return (
    <section id="features">
      <Container>
        <Row>
          {/* Column 1 */}
          <Col lg={6} md={6} className="content">
            <article>
              <h1>Satu Platform, Banyak Solusi</h1>
              <p>
                Kotakode memfasilitasi dengan memberikan berbagai fitur yang
                menarik dan terbaik untuk mengembangkan ekosistem IT anak
                bangsa.
              </p>
            </article>
          </Col>
          {/* Column 2 */}
          <Col lg={6} md={6} className="feature">
            {/* Card 1 */}
            <Card className="ms-auto">
              <Row>
                <Col lg={3} md={2} className="feature-icon">
                  <div>
                    <img src={Icon4} alt="Icon gambar 4" />
                  </div>
                </Col>
                <Col lg={9} md={10} className="feature-content">
                  <h3>Online Forum</h3>
                  <p>
                    Kotakode dapat menjawab pertanyaan dan membantu programmer
                    dalam memberikan jawaban yang berkualitas
                  </p>
                  <a className="btn" href="#">
                    Tanya Sekarang
                  </a>
                </Col>
              </Row>
            </Card>
            {/* Card 2 */}
            <Card className="me-auto">
              <Row>
                <Col lg={3} md={2} className="feature-icon">
                  <div>
                    <img src={Icon5} alt="Icon gambar 5" />
                  </div>
                </Col>
                <Col lg={9} md={10} className="feature-content">
                  <h3>Microblogging</h3>
                  <p>
                    Kotakode menyediakan wadah bagi programmer untuk berbagi
                    wawasan terkait info terkini di bidang IT
                  </p>
                  <a className="btn" href="#">
                    Tulis Sekarang
                  </a>
                </Col>
              </Row>
            </Card>
            {/* Card 3 */}
            <Card className="ms-auto">
              <Row>
                <Col lg={3} md={2} className="feature-icon">
                  <div>
                    <img src={Icon6} alt="Icon gambar 6" />
                  </div>
                </Col>
                <Col lg={9} md={10} className="feature-content">
                  <h3>Job Hiring (Coming Soon)</h3>
                  <p>
                    Kotakode membantu rekruiter dalam mencari talent terbaik
                    yang memenuhi standar perusahaan
                  </p>
                  <a className="btn btn3" aria-disabled href="#">
                    Cari Kerja
                  </a>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
