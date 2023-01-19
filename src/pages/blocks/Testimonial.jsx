import React from "react";
import TestimonialCard from "../../components/TestimonialCard";
import { testimonials } from "../../constants/landing";

const Testimonial = () => {
  return (
    <div className="px-4 md:px-24 lg:px-24 py-12 md:py-24 flex flex-col md:flex-row md:items-center justify-between">
      <h2 className="text-gradient text-lg md:text-3xl font-semibold mb-8 md:mb-12">
        Apa Kata Member?
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {testimonials.map((testimoni, index) => (
          <TestimonialCard key={testimoni.id} {...testimoni} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
