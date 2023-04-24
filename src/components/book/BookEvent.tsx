import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useWindowSize } from "../../hooks/useWindowSize";
import Hero from "../utils/Hero";
import ImageCarousel from "../utils/ImageCarousel";
import bg1 from "../../assets/images/service.jpeg";
import bg2 from "../../assets/images/service2.jpeg";
import bg3 from "../../assets/images/service3.jpg";
import bg4 from "../../assets/images/service4.jpeg";
import bg5 from "../../assets/images/service5.jpeg";

export default function BookEvent() {
  const { isMobile } = useWindowSize();
  const navigate = useNavigate();
  const location = useLocation();

  const heroButton = {
    label: location.pathname.includes("/services")
      ? "Book Online"
      : "Service Booking",
    link: location.pathname.includes("/services")
      ? "/book_online"
      : "/book_online/services",
  };

  return (
    <>
      <Hero
        text="Up to 6 different services to pick and enjoy. With us you'll find professional and suitable audio solutions. If you have some questions you can contact us."
        className="bg-primary section"
        button_variant="secondary"
        text_class="text-white"
        button_label={heroButton.label}
        button_action={() => navigate(heroButton.link)}
      >
        {!isMobile && (
          <ImageCarousel image_sources={[bg1, bg2, bg3, bg4, bg5]} />
        )}
      </Hero>
      <Outlet />
    </>
  );
}
