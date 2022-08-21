import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col xs={12} md={4}>
          <div className="footer-logo">
            <span>
              <Image
                src="/images/codnify-logo-white.svg"
                alt="Footer logo"
                width={60}
                height={60}
              />
            </span>
            <span>Codnify</span>
          </div>
          <div className="address">
            <p>
              52, Street name, Road name, City name, Federal Capital Territory,
              Nigeria.
            </p>
          </div>
          <div className="social-media">
            <ul>
              <li>
                <Link href="/contact">
                  <a>
                    <Image
                      src="/images/footer/youtube.svg"
                      height={32}
                      width={32}
                      alt="Youtube Icon"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>
                    <Image
                      src="/images/footer/facebook.svg"
                      height={32}
                      width={32}
                      alt="Facebook Icon"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>
                    <Image
                      src="/images/footer/whatsapp.svg"
                      height={32}
                      width={32}
                      alt="Whatsapp Icon"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={2}>
          <div className="company-info">
            <h3>Company Info</h3>
            <div className="company-info-links">
              <ul>
                <li>
                  <Link href="/about">
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <a>Work</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/career">
                    <a>Career</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Col>

        <Col xs={12} md={2}>
          <div className="services-footer">
            <h3>Services</h3>
            <div className="services-footer-links">
              <ul>
                <li>
                  <Link href="/services">
                    <a>Mobile App</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a>Web App</a>
                  </Link>
                </li>
                <li>
                  <Link href="services">
                    <a>UI/UX Design</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a>Digital Marketing</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Col>

        <Col xs={12} md={2}>
          <div className="contact-footer">
            <h3>Contact Us</h3>
            <div className="contact-footer-links">
              <ul>
                <li>
                  <Link href="tel:+234 801 234 5678">
                    <a>+234 801 234 5678</a>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@codnify.com">
                    <a>info@codnify.com</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="copyright">
          <p>Copyright © Codnify {new Date().getFullYear()}</p>
        </div>
      </Row>
    </footer>
  );
};

export default Footer;
