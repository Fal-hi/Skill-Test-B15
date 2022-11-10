import React from "react";
import "../components/scss/Tentang.scss";
import Bgkk from "../assets/images/bgkotakode.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tim1 from "../assets/images/tim1.png";
import Tim2 from "../assets/images/tim2.png";
import Tim3 from "../assets/images/tim3.jpg";
import Mascot from "../assets/images/maskot.png";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Tentang() {
  return (
    <section id="events">
      <Container className="tentang">
        <article>
          {/* <div className="divider"></div> */}
          <h1>
            Dukung kami dalam menciptakan ekosistem yang inklusif bagi
            programmer di seluruh Indonesia
          </h1>
        </article>
      </Container>
      <div className="tentang-kk">
        <h2>Tentang Kotakode</h2>
        <p>
          Kotakode merupakan platform komunitas bagi para pegiat IT di Indonesia
          dimana programmer dapat belajar dan berbagi wawasan seputar dunia IT
          terkini untuk mendukung memberikan pertumbuhan perekonomian di
          Indonesia.
        </p>
      </div>
      <Container className="tim">
        <h1>Tim Kotakode</h1>
        {LIST_TIM.map((lt) => (
          <Row key={lt.id} className="list-tim">
            <Col lg={4} className="tim-img">
              <div>
                <img src={lt.img} alt={lt.name} />
              </div>
            </Col>
            <Col lg={8} className="tim-content">
              <h2>{lt.name}</h2>
              <h4>{lt.pos}</h4>
              <h5>{lt.job}</h5>
              <ul>
                <li>{lt.exp1}</li>
                <li>{lt.exp2}</li>
              </ul>
              <div>
                <a href="#">{lt.link1}</a>
                <a href="#">{lt.link2}</a>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
      <Container className="mascot">
        <Row>
          <Col lg={7} className="content">
            <article>
              <h3>Maskot Kotakode</h3>
              <h1>Kucing Robot Koko!</h1>
              <p>
                Banyak dari kita yang menyukai kucing, termasuk para programmer.
                Koko merupakan sebuah robot berbentuk kucing dengan kombinasi
                warna hijau dan putih. Koko adalah sebuah robot yang fanatik
                terhadap teknologi, khususnya di bidang IT. Ia datang dari masa
                depan dan diprogram untuk membantu orang-orang yang memiliki
                semangat yang sama dengan dirinya. Sama seperti Koko, Kotakode
                memiliki semangat untuk membantu para fanatik IT di Indonesia
                untuk mengembangkan ekosistem yang menyenangkan untuk
                mempelajari hal-hal yang berkaitan dengan dunia IT terkini.
              </p>
            </article>
          </Col>
          <Col lg={5} className="icon">
            <img src={Mascot} alt="Maskot Kotakode" />
          </Col>
        </Row>
      </Container>
      <Container className="question">
        <h1>Punya Pertanyaan Mengenai Kotakode?</h1>
        <article>
          <p>
            Kotakode merupakan platform yang dibuat untuk mengatasi permasalahan
            bagi para pegiat IT di Indonesia. Kami menyadari bahwa kami sangat
            membutuhkan kontribusi pengguna dalam membangun Kotakode. Agar
            setiap fitur, tombol, dan warna yang kami buat sesuai dengan
            kebutuhan pengguna. Oleh karena itu jika kamu memiliki pertanyaan,
            saran, atau tawaran kerjasama yang ingin ditanyakan dan diskusikan
            dengan kami. Silakan hubungi kami melalui:
          </p>
          <h4>Kotakode:</h4>
          <p>
            Ariobimo Sentral level 8. Jalan H. R. Rasuna Said Kav X-2 No. 5,
            Kuningan Timur, Setiabudi, Jakarta Selatan 12950
          </p>
          <h4>Email:</h4>
          <a href="#">petertanugraha@kotakode.com</a>
        </article>
      </Container>
    </section>
  );
}

const LIST_TIM = [
  {
    id: 1,
    img: Tim1,
    name: "Peter Tanugraha",
    pos: "Cofounder & CEO",
    job: "Computer Engineering @University of Toronto 2019",
    exp1: "Deep Learning Engineer @IBM Canada (1.5 years)",
    exp2: "Deep Learning Engineer / Software Engineer @Nightingtale.ai Canada (1.5 years)",
    link1: <FaLinkedin />,
    link2: <FaGithubSquare />,
  },
  {
    id: 2,
    img: Tim2,
    name: "Michael Englo",
    pos: "Cofounder & CTO",
    job: "Computer Science @University of British Columbia 2020",
    exp1: "Software Engineer @Google Canada (Currently)",
    exp2: "Software Engineer @Google Sillcon Valley (4 month)",
    link1: <FaLinkedin />,
    link2: <FaGithubSquare />,
  },
  {
    id: 3,
    img: Tim3,
    name: "Anncarel Sanchiabarca",
    pos: "Cofounder & CBO",
    job: "Computing & Information Systems @University of London 2019",
    exp1: "Software Engineer @Crowde (3 months)",
    exp2: "CEO @Egglab.id",
    link1: <FaLinkedin />,
    link2: <FaGithubSquare />,
  },
];
