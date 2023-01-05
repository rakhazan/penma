import React from "react";

const FeatureCard = ({ icon, heading, desc, index }) => (
  <>
    <div className="flex flex-col items-start gap-2 flex-none w-full max-w-sm bg-white rounded-3xl px-4 py-6">
      <img src={icon} alt={`icon ${index}`} className="h-24" />
      <h5 className="text-sm md:text-lg text-black font-semibold">{heading}</h5>
      <p className="text-xs md:text-base">{desc}</p>
    </div>
  </>
);

export default FeatureCard;
