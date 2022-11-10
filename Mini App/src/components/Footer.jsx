import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import "./scss/Footer.scss";
import Block71 from "../assets/images/block71.png";
import Gfs from "../assets/images/googleforstartup.png";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col lg={4} md={5}>
            <h6>BAGIAN DARI:</h6>
            <Stack direction="horizontal">
              <img src={Block71} alt="Block71 Icon" />
              <img src={Gfs} alt="Google For Startup Icon" />
            </Stack>
          </Col>
          <Col lg={5} md={7}>
            <div className="lists">
              <div className="products">
                <h6>PRODUK</h6>
                <ul>
                  <li>Pertanyaan</li>
                  <li>Blog</li>
                  <li>Pengguna</li>
                  <li>Events</li>
                  <li>Partnership</li>
                </ul>
              </div>
              <div className="company">
                <h6>PERUSAHAAN</h6>
                <ul>
                  <li>About</li>
                  <li>FAQ</li>
                  <li>Rules</li>
                  <li>Legal</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={12} className="column3">
            <h6>HUBUNGI KAMI</h6>
            <p>petertanugraha@kotakode.com</p>
            <div className="social-media">
              <AiFillLinkedin />
              <AiOutlineInstagram />
              <AiFillTwitterSquare />
              <AiFillFacebook />
            </div>
          </Col>
        </Row>
        <div className="copyright">
          <p>PT. Kota Digital Nusantara</p>
          <p>Copyright 2020 Kotakode. All rights reserved</p>
          <p>Made with 💗 in Indonesia</p>
        </div>
      </Container>
    </footer>
  );
}
