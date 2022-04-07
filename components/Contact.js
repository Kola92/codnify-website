import React from "react";
import TextField from "@mui/material/TextField";
import { Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <section>
      <h4>Contact Us</h4>
      <p>
        If you have project requirements or you feel like knowing Codnify, just
        the fill the form and we are just a click away.
      </p>
      <div>
        <Row>
          <Col>
            <TextField
              required
              id="standard-full-name"
              label="Full Name"
              type="text"
              variant="standard"
              style={{color:"white"}}
            />
          </Col>
          <Col>
            <TextField
              required
              id="standard-phone-number"
              type="text"
              label="Phone Number"
              variant="standard"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <TextField
              required
              id="standard-email"
              label="Email"
              type="email"
              variant="standard"
            />
          </Col>
          <Col>
            <TextField
              required
              id="standard-company"
              label="Company"
              type="text"
              variant="standard"
            />
          </Col>
        </Row>
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
