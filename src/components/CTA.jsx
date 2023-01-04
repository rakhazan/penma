import React from "react";
import { cta } from "../constants/landing";

const CTA = () => (
  <>
    <div
      className={`px-12 py-8 my-12 md:my-24 max-w-5xl mx-auto bg-[url('/src/assets/cta-bg.svg')] bg-cover bg-center rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-4`}
    >
      <img
        src={cta.img}
        alt="lup"
        className="h-20 sm:h-40 sm:order-1 sm:mr-12"
      />
      <div className="flex flex-col items-center sm:items-start justify-center gap-2 text-center sm:text-start">
        <h2 className="text-white font-bold text-2xl md:text-4xl w-[200px] md:w-[300px]">
          {cta.title}
        </h2>
        <p className="text-white text-xs">{cta.subtitle}</p>
        <a
          href={cta.wa}
          target="_blank"
          className="text-xs font-semibold text-black bg-white rounded-full py-2 px-6"
        >
          Whatsapp
        </a>
      </div>
    </div>
  </>
);

export default CTA;
