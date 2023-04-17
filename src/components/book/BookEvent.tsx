import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useWindowSize } from "../../hooks/useWindowSize";
import Hero from "../utils/Hero";
import ImageCarousel from "../utils/ImageCarousel";
import BookingForm from "./BookingForm";
import bg1 from "../../assets/ensemble_bg.jpg";
import bg2 from "../../assets/ensemble_bg2.jpg";
import bg3 from "../../assets/ensemble_bg3.jpg";
import bg4 from "../../assets/ensemble_bg4.jpg";

export default function BookEvent() {
  const { isMobile } = useWindowSize();
  const navigate = useNavigate();

  return (
    <>
      <Hero
        text="Up to 4 different areas to pick and enjoy. If you need to smoke select a table outside in our beautiful garden. Inside our restaurant you’ll find music and sports in our top screens."
        className="bg-primary section"
        button_variant="secondary"
        text_class="text-white"
        button_label="Online Booking"
        button_action={() => navigate("/services")}
      >
        {!isMobile && <ImageCarousel image_sources={[bg1, bg2, bg3, bg4]} />}
      </Hero>
      <Container className="center-container px-6">
        <h4 className="text-primary text-center">Book a Session</h4>
        <BookingForm />
      </Container>
    </>
  );
}
