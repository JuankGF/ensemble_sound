import React from "react";

import About from "./About";
import ServiceGrid from "./ServiceGrid";
import Testimonials from "./Testimonials";
import HeroSection from "../utils/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceGrid />
      <Testimonials />
      <About />
    </>
  );
}
