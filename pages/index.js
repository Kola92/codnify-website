import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import About from "../components/About";

export default function Home() {
  const styling = {
    backgroundImage: "url('/images/codnify-logo-behind-phone.png')",
    width: "100%",
    height: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const copyStyling = {
    backgroundImage: "url('/images/rounded-rectangle.svg')",
    backgroundSize: "32.375rem",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Codnify</title>
        <meta name="description" content="Codnify" />
        <link rel="icon" href="/images/logo.png" />

        {/* Bebas Neue Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />

        {/* Montserrat Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Poppins Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="above-fold">
        <header>
          <Navbar />
        </header>
        <Container>
          <Row>
            <Col className="copy-text-content" style={copyStyling}>
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>
                Being a top software development company, we help businesses to
                get their digital products done the right way on time, in
                budget.
              </p>
            </Col>
            <Col className="codnify-logo-container">
              <div className="codnify-logo" style={styling}>
                <div className="phone">
                  <Image
                    src="/images/phone-on-logo.png"
                    alt="iPhone"
                    height={500}
                    width={330.47}
                  />
                </div>
              </div>
            </Col>
          </Row>

          <div className="down-arrow-icon">
            <Image
              src="/images/down-arrow-icon.svg"
              width={30}
              height={15}
              alt="Down arrow icon"
            />
          </div>
          <div className="partners">
            <h2>Partners</h2>
            <div>
              <Partners />
            </div>
          </div>
        </Container>
      </div>

      <main className={styles.main}>
        <Container>
          <Row>
            <About />
          </Row>
          <Row>
            
          </Row>
        </Container>
      </main>
    </div>
  );
}
