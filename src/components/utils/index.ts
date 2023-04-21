import ErrorPage from "./ErrorPage";
import Field from "./Field";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import HeroSection from "./HeroSection";
import ImageCarousel from "./ImageCarousel";
import Navbar from "./Navbar";
import SocialMedias from "./SocialMedias";
import SuccessFrame from "./SuccessFrame";

const getImage = (name: string, fileExt: string = "png") => {
  try {
    return require(`../../assets/images/${name}.${fileExt}`);
  } catch (error) {
    return undefined;
  }
};

export {
  ErrorPage,
  Field,
  Footer,
  Header,
  Hero,
  HeroSection,
  ImageCarousel,
  Navbar,
  SocialMedias,
  SuccessFrame,
  getImage,
};
