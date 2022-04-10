import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

const { Collapse, Brand, Toggle } = Navbar;

const NavigationBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Brand>
          <Image
            // loader={myLoader}
            src="/images/logo.png"
            alt="Codnify Logo"
            width={60}
            height={60}
          />
          <span className="navbar-brand-text">Codnify</span>
        </Brand>
        <Toggle />
        <Collapse className="justify-content-end">
          <Nav>
            <Link href="/about-us">
              <a className="nav-link">About Us</a>
            </Link>
            <Link href="/services">
              <a className="nav-link">Services</a>
            </Link>
            <Link href="/projects">
              <a className="nav-link">Projects</a>
            </Link>
            <Link href="contact">
              <a className="nav-link contact-link">
                Contact Us
              </a>
            </Link>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
