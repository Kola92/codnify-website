import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Services.module.css";

import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

Services.title = " Services | Codnify";
Services.description = "Codnify Services";

export default function Services() {
  const aboveFoldStyling = {
    backgroundImage:
      "url('/images/services/above-fold-services-background-image.png')",
    borderRadius: "0px 0px 0px 246.5px",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div className="servicesAboveFold" style={aboveFoldStyling}>
        <header className="about-header">
          <NavigationBar />
        </header>
        <Container>
          <Row>
            <Col className="about-copy-text">
              <h1>Our Services</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <main className={styles.main}>
        <Container as="section" className="section-services">
          <div className="layout">
            <div className="layout__item layout__item--figure">
              <Image
                src="/images/services/mobile-dev-image.png"
                alt="Mobile Development"
                width={400}
                height={400}
              />
            </div>

            <div className="layout__item layout__item--body layout__item-1">
              <h2>Mobile Development</h2>
              <ul>
                <li>Android App Development</li>
                <li>iOS App Development</li>
                <li>Cross-Platform Development</li>
              </ul>
            </div>
          </div>

          <div className="layout">
            <div className="layout__item layout__item--figure">
              <Image
                src="/images/services/web-dev-image.png"
                alt="Web Development"
                width={400}
                height={400}
              />
            </div>

            <div className="layout__item layout__item--body layout__item-2">
              <h2>Web Development</h2>
              <ul>
                <li>Front-end Development</li>
                <li>Back-end Development</li>
                <li>Full Stack Development</li>
              </ul>
            </div>
            
          </div>

          <div className="layout">
          <div className="layout__item layout__item--figure">
              <Image
                src="/images/services/design-image.png"
                alt="Design"
                width={400}
                height={400}
              />
            </div>

            <div className="layout__item layout__item--body layout__item-3">
              <h2>Design</h2>
              <ul>
                <li>UI/UX Design</li>
                <li>Branding</li>
                <li>Wireframing</li>
              </ul>
            </div>

          </div>

          <div className="layout">
            <div className="layout__item layout__item--figure">
              <Image
                src="/images/services/quality-assurance-image.png"
                alt="Quality Assurance"
                width={400}
                height={400}
              />
            </div>

            <div className="layout__item layout__item--body layout__item-3">
              <h2>Quality Assurance</h2>
              <ul>
                <li>Quality Assurance Consulting</li>
                <li>Usability Testing</li>
                <li>Security Testing</li>
              </ul>
            </div>
            
          </div>

          <div className="layout">
          <div className="layout__item layout__item--figure">
              <Image
                src="/images/services/digital-marketing-image.png"
                alt="Digital Marketing"
                width={400}
                height={400}
              />
            </div>

            <div className="layout__item layout__item--body layout__item-4">
              <h2>Digital Marketing</h2>
              <ul>
                <li>Content Strategy</li>
                <li>Search Engine Optimisation</li>
                <li>Social Networking</li>
              </ul>
            </div>
            
          </div>
        </Container>
      </main>

      <div className="footer-container">
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
}
