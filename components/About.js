import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "next/image";

export const aboutCards = [
  {
    id: 1,
    source: "/images/about-us/solutions-released-icon.svg",
    title:"80+ Solutions Released"
  },
  { id: 2, source: "/images/about-us/in-house.svg", title:"10+ In-house Professionals" },
  { id: 3, source: "/images/about-us/yearsofexperience-icon.svg", title:"5+ Years of Experience" },
];

const {Body, Title} = Card;

const About = () => {
  return (
    <>
      <h3>About Us</h3>
      <h4 className="about-copy">
        Codnify is a trusted full-service software development company oriented
        towards Europe and North America, offering the one-stop-shop for all
        your business solutions and requirements. We build a long-term
        relationship with our clients and offer a full range of services.
      </h4>
      <Row>
        {aboutCards.map((card) => (
          <Col key={card.id}>
            <Card>
              <Body>
                <Image src={card.source} height={80} width={80} />
                <Title>{card.title}</Title>
              </Body>
            </Card> 
          </Col>
        ))}
      </Row>
    </>
  );
};

export default About;
