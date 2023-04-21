import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Hero from "../utils/Hero";

export default function About() {
  const navigate = useNavigate();

  return (
    <Hero
      id="about"
      text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
      className="mb-5 center-container container"
      title_class="text-primary"
      button_action={() => navigate("/book_online")}
    >
      <Container className="position-relative">
        <img
          src={require("../../assets/images/session.jpeg")}
          alt="restaurant-hero-1"
          className="shadow-md rounded-sm on-bottom banner-img"
        />
        <img
          src={require("../../assets/images/session2.jpg")}
          alt="restaurant-hero-2"
          className="shadow-md rounded-sm on-top banner-img"
        />
      </Container>
    </Hero>
  );
}
