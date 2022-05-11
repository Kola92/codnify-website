import React from "react";
import Head from "next/head";
import Image from "next/image";
import NavigationBar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

Projects.title = " Projects | Codnify";
Projects.description = "Codnify Projects";

export default function Projects() {
  const projectBannerStyling = {
    backgroundImage: "url('/images/projects/projects-banner.png')",
    borderRadius: "0px 0px 0px 246.5px",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div>
      <Head>
        <link rel='icon' href='/images/logo.png' />
      </Head>

      <div className='servicesAboveFold' style={projectBannerStyling}>
        <header className='projects-header'>
          <NavigationBar />
        </header>
        <Container>
          <Row>
            <Col className='projects-copy-text'>
              <h1>Projects</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <main className='h-full'>
        <div className='main-inner md:max-w-5xl lg:max-w-6xl mx-auto h-full'>
          <div className='projectsGalleryRow mt-20 sm:px-5'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((grid, index) => (
              <div key={index} className='projectsGalleryColumn mb-4'>
                <img
                  className='rounded-2xl w-full'
                  src='/images/projects/projects-gallery-image.png'
                  alt=''
                />
                <div className='image__overlay image__overlay--primary rounded-2xl px-9 pt-12'>
                  <div className='project-description h-full w-full'>
                    <h2 className='project-title font-bold text-xl mb-1.5'>Gumb</h2>
                    <p className='project-type'>Productivity app</p>
                    <div className='platforms'>
                      <h3 className='uppercase text-base platform-title mb-0'>
                        Platforms
                      </h3>
                      <p className='platform-description'>
                        Web, iOS, and Android
                      </p>
                    </div>
                    <div className='project-description-details'>
                      <h3 className="text-base uppercase mb-0">Description</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Convallis pharetra cum consectetur volutpat ac. Sit
                        consectetur nisl, ornare odio sit cras. Augue faucibus
                        sem nisl etiam mauris ultricies proin. Morbi lectus
                        elementum at nulla adipiscing donec.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>


      <div className="footer-container">
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
}
