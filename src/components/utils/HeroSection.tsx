import React from "react";
import { useNavigate } from "react-router-dom";

import Hero from "./Hero";
import { useWindowSize } from "../../hooks/useWindowSize";
import ImageCarousel from "./ImageCarousel";
import bg1 from "../../assets/images/ensemble_bg.jpg";
import bg2 from "../../assets/images/ensemble_bg2.jpg";
import bg3 from "../../assets/images/ensemble_bg3.jpg";
import bg4 from "../../assets/images/ensemble_bg4.jpg";

export default function HeroSection() {
  const navigate = useNavigate();
  const { isMobile } = useWindowSize();
  return (
    <Hero
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      className="bg-primary section"
      button_variant="secondary"
      text_class="text-white"
      button_action={() => navigate("/book_online")}
    >
      {!isMobile && <ImageCarousel image_sources={[bg1, bg2, bg3, bg4]} />}
    </Hero>
  );
}
