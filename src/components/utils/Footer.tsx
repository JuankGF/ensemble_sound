import React from "react";
import { Col, Image, Row } from "react-bootstrap";

import logo from "../../assets/logo2.png";
import { useWindowSize } from "../../hooks/useWindowSize";
import Navbar from "./Navbar";
import SocialMedias from "./SocialMedias";

export default function Footer() {
  const { isMobile } = useWindowSize();
  return (
    <footer className="pt-3 px-5 d-flex align-items-center">
      <Row className="g-3 w-100">
        <Col xs={12} md={4} className="position-relative text-center">
          {!isMobile && (
            <Image
              src={logo}
              width="100rem"
              className="shadow-sm object-fit-cover"
              title="©EnsembleSound"
              alt="©EnsembleSound"
            />
          )}
          <div className="text-muted text-nowrap">©EnsembleSound 2023</div>
        </Col>
        {!isMobile && (
          <Col as="nav" md="auto">
            <h6 className="text-primary">Navigation</h6>
            <Navbar linkClassName="text-muted text-sm" className="footer-nav" />
          </Col>
        )}
        <Col xs={12} md="auto">
          <h6 className="text-primary">Contact</h6>
          <p className="text-muted text-sm">
            Address:{" "}
            <small className="select-all-text">
              901 SW 15th TER, Cape Coral FL
            </small>
          </p>
          <p className="text-muted text-sm">
            Phone:{" "}
            <small className="select-all-text">
              <a href="tel:1305-609-6067">+1 305 609 6067</a>
            </small>
          </p>
          <p className="text-muted text-sm">
            Email:{" "}
            <small className="select-all-text">
              <a href="mailto:eddyensemble@gmail.com">eddyensemble@gmail.com</a>
            </small>
          </p>
        </Col>
        <Col xs={12} md="auto">
          <h6 className="text-primary">Social Media Links</h6>
          <div
            className={`d-flex w-100 g-3 align-items-center ${
              isMobile ? "justify-content-start" : "justify-content-center"
            }`}
          >
            <SocialMedias />
          </div>
        </Col>
      </Row>
    </footer>
  );
}
