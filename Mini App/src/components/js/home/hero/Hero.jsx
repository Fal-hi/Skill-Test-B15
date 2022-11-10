import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import "./Hero.scss";
import PetaIndonesia from "../../../../assets/images/petaindonesia.png";

export default function Hero() {
  return (
    <section id="hero">
      <Container>
        <Row>
          <Col lg="6" className="content">
            <article>
              <h1>Jadilah Bagian dari Komunitas Tech Terbesar di Indonesia</h1>
              <h6>
                Ikutan diskusi forum tanya jawab, tulis blog dan Membangun
                portofolio semua di Kotakode
              </h6>
              <div className="daftar">
                <input type="text" placeholder="Masukkan Email Kamu" />
                <a href="#" className="btn">
                  Daftar
                </a>
              </div>
              <Stack direction="horizontal">
                <div>
                  <h3>29265</h3>
                  <span>User Bergabung</span>
                </div>
                <div>
                  <h3>1037</h3>
                  <span>Blog Ditulis</span>
                </div>
                <div>
                  <h3>19478</h3>
                  <span>Total Pertanyaan & Jawaban</span>
                </div>
              </Stack>
            </article>
          </Col>
          <Col lg="6" className="peta">
            <img src={PetaIndonesia} alt="Peta Indonesia" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
