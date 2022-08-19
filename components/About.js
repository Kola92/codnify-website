import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "next/image";

export const aboutCards = [
  {
    id: 1,
    source: "/images/about-us/star-front-color.png",
    title:"80+ Solutions Released",
    alt:"Solutions Icon"
  },
  { id: 2, source: "/images/about-us/boy-front-color.png", title:"10+ In-house Professionals", alt:"In house professionals icon" },
  { id: 3, source: "/images/about-us/clock-front-color.png", title:"5+ Years of Experience", alt:"Years of Experience icon" },
];

const {Body, Title} = Card;

const About = () => {
  return (
    <>
      <h3>About Us</h3>
      <p className="about-copy">
        Codnify is a trusted full-service software development company oriented
        towards Europe and North America, offering the one-stop-shop for all
        your business solutions and requirements. We build a long-term
        relationship with our clients and offer a full range of services.
      </p>
      <Row>
        {aboutCards.map((card) => (
          <Col key={card.id}>
            <Card>
              <Body>
                <Image src={card.source} alt={card.alt} height={100} width={100} />
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
