import React from "react";
import Hero from "./blocks/Hero";
import ContentPurpose from "./blocks/ContentPurpose";
import ContentProduct from "./blocks/ContentProduct";
import CTA from "../components/CTA";
import Testimonial from "./blocks/Testimonial";
import Footer from "../components/Footer";
import AboutPenma from "./blocks/AboutPenma";
import Teams from "./blocks/Teams";

const Landing = () => (
  <>
    <Hero />
    <AboutPenma />
    <ContentPurpose />
    <ContentProduct />
    <CTA />
    <Testimonial />
    <Teams />
    <Footer />
  </>
);

export default Landing;
