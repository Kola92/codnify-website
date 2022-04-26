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
      <div className="input-field-row">
        <Row>
          <Col>
            <TextField
              required
              id="standard-full-name"
              label="Full Name"
              type="text"
              variant="standard"
              className="input-text-field"
            />
          </Col>
          <Col>
            <TextField
              required
              id="standard-phone-number"
              type="text"
              label="Phone Number"
              variant="standard"
              className="input-text-field"
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
              className="input-text-field"
            />
          </Col>
          <Col>
            <TextField
              required
              id="standard-company"
              label="Company"
              type="text"
              variant="standard"
              className="input-text-field"
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
