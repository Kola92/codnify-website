import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="white"
        className="bi bi-arrow-left-short"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
        />
      </svg>
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="white"
        className="bi bi-arrow-right-short"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
        />
      </svg>
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    picture: "/images/testimonials/alex.png",
    name: "Alexandria Gallagher",
    role: "CTO, DevGenius",
    feedbackHeading: "Amazing customer service and delivery",
    feedback:
      "The team at Codnify deliver quality results through a collaborative process, taking an active role in feedback cycles. They are fast, flexible, communicative, and always striving to do everything necessary to help the customer.",
  },
  {
    id: 2,
    picture: "/images/testimonials/john.jpg",
    name: "John Fowler",
    role: "Product Manager",
    feedbackHeading: "Super Confident",
    feedback:
      "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
  },
];

const Testimonials = () => {
  var settings = {
    // dots: true,
    // arrow:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  return (
    <section>
      <h3>Testimonials</h3>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="testimonial-container">
              <div className="image-with-clientdetails">
                <Image src={testimonial.picture} height={300} width={300} alt="Client Picture" />
                <div className="testimonial-feedback">
                  <h4>{testimonial.feedbackHeading}</h4>
                  <h5>{testimonial.feedback}</h5>
                </div>
              </div>

              {/* <div className="client-details">
                <h4>{testimonial.name}</h4>
                <h5>{testimonial.role}</h5>
              </div> */}
            </div>
            {/* <Col>
                
                <div className="client-details">
                  <h4>{testimonial.name}</h4>
                  <h5>{testimonial.role}</h5>
                </div>
              </Col> */}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
