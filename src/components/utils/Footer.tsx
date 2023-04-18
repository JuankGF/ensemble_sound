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
        <Col xs={5} md={4} className="position-relative m-auto">
          <Image
            src={logo}
            width="100rem"
            className="shadow-sm object-fit-cover"
            title="©EnsembleSound"
            alt="©EnsembleSound"
          />
          <div className="text-muted">©EnsembleSound 2023</div>
        </Col>

        <Col>
          <Row className="px-3 g-3 w-100">
            {!isMobile && (
              <Col as="nav">
                <h6 className="text-primary">Navigation</h6>
                <Navbar
                  linkClassName="text-muted text-sm"
                  className="footer-nav"
                />
              </Col>
            )}
            <Col xs={6} md="auto">
              <h6 className="text-primary">Contact</h6>
              <p className="text-muted">
                <small>901 SW 15th TER, Cape Coral FL</small>
              </p>
              <p className="text-muted">
                <small>+1 305 609 6067</small>
              </p>
              <p className="text-muted">
                <small>eddyensemble@gmail.com</small>
              </p>
            </Col>
            <Col xs={6} md="auto">
              <h6 className="text-primary">Social Media Links</h6>
              <div className="d-flex w-100 g-3 align-items-center justify-content-center">
                <SocialMedias />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
}