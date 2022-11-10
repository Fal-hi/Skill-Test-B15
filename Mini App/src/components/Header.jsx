import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import KotaKodeLogo from "../assets/images/kotakode.png";
import "./scss/Header.scss";
import Case from "./Case";
import HeaderLink from "./HeaderLink";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Navbar expand="lg" fixed="top">
        <Case>
          <Container fluid xs="w-100">
            <Navbar.Brand>
              <Link to="/">
                <img
                  src={KotaKodeLogo}
                  alt="kotakode logo"
                  width="120"
                  height="auto"
                  className="d-inline-block align-top"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar-expand-lg"
              className="me-lg-4"
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id="offcanvasNavbarLabel-expand-lg"
                  className="f"
                >
                  <img src={KotaKodeLogo} alt="Kotakode Logo" width="110" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1">
                  <Nav.Link>
                    <HeaderLink href="/tentang">Tentang</HeaderLink>
                  </Nav.Link>
                  <NavDropdown title="Product" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      <p>Forum Q&A</p>
                      <span>Pertanyaan & Jawaban</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      <p>Blog</p>
                      <span>Diskusi & Informasi</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      <p>Jobs</p>
                      <span>Cari Kerja</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">FAQ</Nav.Link>
                  <Nav.Link href="#">Events</Nav.Link>
                  <Nav.Link href="#">Partnership</Nav.Link>
                  <div className="nav-btn">
                    <a href="#" className="btn btn-outline-success">
                      Masuk
                    </a>
                    <a href="#" className="btn btn-success">
                      Daftar
                    </a>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Case>
      </Navbar>
    </header>
  );
}
