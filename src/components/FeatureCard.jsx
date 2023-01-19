import React from "react";

const FeatureCard = ({ icon, heading, desc, index }) => (
  <>
    <div className="flex flex-col items-start gap-4 flex-none w-full md:max-w-[270px] bg-white rounded-3xl px-4 py-6">
      <img src={icon} alt={`icon ${index}`} className="h-24" />
      <h5 className="text-sm md:text-lg text-black font-semibold">{heading}</h5>
      <p className="text-xs md:text-sm">{desc}</p>
    </div>
  </>
);

export default FeatureCard;
