import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";

export const services = [
  { id: 1, text: "Mobile Development" },
  { id: 2, text: "Web App Development" },
  { id: 3, text: "UI/UX Design" },
  { id: 4, text: "Quality Assurance" },
  { id: 5, text: "Digital Marketing" },
];

const imgSource = "/images/services/triangle-points.svg";

const Services = () => {
  return (
    <>
      <Row>
        
        <Col>
          {services.map((service) => (
            <div key={service.id} className='services-list'>
              <span>
                <Image src={imgSource} height={25} width={25} alt='' />
              </span>
              <span>{service.text}</span>
            </div>
          ))}
        </Col>
        <Col>
          <Image
            src='/images/services/rounded-services.png'
            height={444}
            width={444}
            alt='Software Development Services'
          />
        </Col>
      </Row>
    </>
  );
};

export default Services;
