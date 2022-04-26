import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects/Projects";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

Home.title = "Home | Codnify ";
Home.description = "Codnify Homepage";

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

  const phoneLogoStyling = {
    backgroundImage: "url('/images/phone-on-logo.png')",
    width: "100%",
    height: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div>
      <Head>
        <link rel='icon' href='/images/logo.png' />
      </Head>

      <div className='above-fold'>
        <header>
          <Navbar />
        </header>
        <Container>
          <Row className='above-fold-row'>
            <Col className='copy-text-content' style={copyStyling}>
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>
                Being a top software development company, we help businesses to
                get their digital products done the right way on time, in
                budget.
              </p>
            </Col>
            <Col className='codnify-logo-container'>
              <div className='codnify-logo' style={styling}>
                <div className='phone'>
                  <Image
                    src='/images/phone-on-logo.png'
                    alt='iPhone'
                    // layout='fill'
                    // objectFit='contain'
                    height={500}
                    width={330.47}
                  />
                </div>
              </div>
            </Col>
          </Row>

          <div className='down-arrow-icon'>
            <Image
              src='/images/down-arrow-icon.svg'
              width={30}
              height={15}
              alt='Down arrow icon'
            />
          </div>
          <div className='partners'>
            <h2>Partners</h2>
            <div>
              <Partners />
            </div>
          </div>
        </Container>
      </div>

      <main className={styles.main}>
        <Container>
          <Row className='about-section'>
            <About />
          </Row>
          <Row className='services-section'>
            <h3>Services</h3>
            <Services />
          </Row>
          <Row className='projects-section'>
            <Projects />
          </Row>
          <Row className='testimonials-section'>
            <Testimonials />
          </Row>
          <Row className='contact-section'>
            <Contact />
          </Row>
        </Container>
      </main>
      <div className='footer-container'>
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
}
