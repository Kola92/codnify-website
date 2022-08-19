import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";

export const services = [
  {
    id: 1,
    source: "/images/services/computer-front-color.png",
    serviceType: "Website Development",
  },
  {
    id: 2,
    source: "/images/services/paint-kit-front-color.png",
    serviceType: "UI/UX Design",
  },
  {
    id: 3,
    source: "/images/services/megaphone-front-color.png",
    serviceType: "Mobile Development",
  },
  {
    id: 4,
    source: "/images/services/megaphone-front-color.png",
    serviceType: "Digital Marketing",
  },
  {
    id: 5,
    source: "/images/services/target-front-color.png",
    serviceType: "Quality Assurance",
  },
];

const imgSource = "/images/services/triangle-points.svg";

const Services = () => {
  return (
    <>
      <Row>
        <Col>
          <div className='services-container'>
            {services.map((service) => (
              <div key={service.id} className='services-list'>
                <div className="services-list__graphic">
                  <Image src={service.source} height={100} width={100} alt='' />
                </div>
                <div className='services-type'>
                  <h3>{service.serviceType}</h3>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Services;
