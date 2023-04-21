import React from "react";

import About from "./About";
import ServiceGrid from "./ServiceGrid";
import Testimonials from "./Testimonials";
import HeroSection from "../utils/HeroSection";
import TechRider from "./TechRider";
import UpcomingEvents from "./UpcomingEvents";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceGrid />
      <Testimonials />
      <About />
      <TechRider />
      <UpcomingEvents />
    </>
  );
}
