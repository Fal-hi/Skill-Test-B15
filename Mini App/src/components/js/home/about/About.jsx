import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Icon1 from "../../../../assets/images/icon1.png";
import Icon2 from "../../../../assets/images/icon2.png";
import Icon3 from "../../../../assets/images/icon3.png";
import "./About.scss";
export default function About() {
  return (
    <section id="about">
      <Container>
        <Row>
          {/* Column 1 */}
          <Col lg={4} md={6} className="column1" xs={{ order: 2 }}>
            {/* Card 1 */}
            <Card className="card1" style={{ marginBottom: "2.5rem" }}>
              <Row>
                <Col lg={4} md={12}>
                  <img src={Icon1} alt="Icon gambar 1" />
                </Col>
                <Col lg={8}>
                  <h5>Jawaban cepat, tepat & gratis</h5>
                  <p>
                    Dapatkan jawaban dalam hitungan menit dari ribuan programmer
                    lainnya.
                  </p>
                </Col>
              </Row>
            </Card>
            {/* Card 2 */}
            <Card className="card2">
              <Row>
                <Col lg={4}>
                  <img src={Icon2} alt="Icon gambar 2" />
                </Col>
                <Col lg={8}>
                  <h5>Konsep Gamifikasi</h5>
                  <p>
                    Dapatkan badge menarik yang akan meningkatkan personal
                    branding kamu sebagai seorang programmer.
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          {/* Column 2 */}
          <Col lg={4} md={6} className="column2" xs={{ order: 4 }}>
            <Card className="card3">
              <img src={Icon3} alt="Icon gambar 3" className="card-img-top" />
              {/* <Card.Body> */}
              <h5>Bangun Online Portofolio</h5>
              <p>
                Portofolio ibaratkan sebuah aset yang berharga bagi setiap
                orang. Semakin kamu aktif di dalam forum, semakin membuktikan
                bahwa kamu adalah programmer yang berkualitas.
              </p>
              {/* </Card.Body> */}
            </Card>
          </Col>
          {/* Column 3 */}
          <Col lg={4} md={12} className="column3" xs={{ order: 1 }}>
            <Card className="card4">
              <h1>Mengapa perlu menggunakan Kotakode?</h1>
              <p>
                Ibaratkan sebuah kota dengan penduduk para programmer, Kotakode
                memberikan fasilitas guna mensejahterakan kehidupan penduduknya.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
