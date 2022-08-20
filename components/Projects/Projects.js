import React from "react";

import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Projects = () => {
  const projectItems = [
    { id: 1, img: "/images/projects/project-1.png", url:"/projects/1" },
    { id: 2, img: "/images/projects/project-2.png", url:"/projects/2" },
    { id: 3, img: "/images/projects/project-3.png", url:"/projects/3" },
  ];

  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section>
      <h3>Projects</h3>
      <p>We’ve worked on various scale projects over the years</p>
      <Row>
        <Col>
          <h4>[PROJECTS CAROUSEL SECTION COMING SOON]</h4>
          {/* <OwlCarousel
            id="project"
            className="owl-carousel owl-theme"
            {...options}
          >
            {projectItems.map((projectItem) => {
              return (
                <div className="item" key={projectItem.id}>
                  <div className="shadow-effect">
                    <Link href={projectItem.url}>
                      <a>
                        <Image
                          className="img-circle"
                          src={projectItem.img}
                          height={500}
                          width={500}
                          alt="Project Item"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </OwlCarousel> */}
        </Col>
      </Row>
    </section>
  );
};

export default Projects;
