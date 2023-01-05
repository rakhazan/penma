import React from "react";
import Hero from "./blocks/Hero";
import ContentPurpose from "./blocks/ContentPurpose";
import ContentProduct from "./blocks/ContentProduct";
import CTA from "../components/CTA";
import Testimonial from "./blocks/Testimonial";
import Footer from "../components/Footer";

const Landing = () => (
  <>
    <Hero />
    <ContentPurpose />
    <ContentProduct />
    <CTA />
    <Testimonial />
    <Footer />
  </>
);

export default Landing;
