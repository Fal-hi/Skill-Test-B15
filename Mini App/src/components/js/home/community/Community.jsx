import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import "./Community.scss";
import Telegram from "../../../../assets/images/telegram.png";

export default function Community() {
  return (
    <section id="community">
      <Container>
        <Stack>
          <article>
            <img src={Telegram} alt="Telegram icon" />
            <h4>Gabung Komunitas Telegram Kotakode</h4>
            <p>
              Kotakode berkolaborasi dengan berbagai pioneer yang inovatif untuk
              bersama mencapai tujuan yang besar
            </p>
            <a href="#" className="btn">
              Ikutan Telegram!
            </a>
          </article>
        </Stack>
      </Container>
    </section>
  );
}
