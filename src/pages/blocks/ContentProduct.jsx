import React from "react";
import ClassCard from "../../components/ClassCard";
import { promo } from "../../constants/landing";

const ContentProduct = () => {
  return (
    <div className="px-4 md:px-24 lg:px-24 py-12 md:py-24">
      <h3 className="text-gradient md:text-2xl font-medium">Kelas Premium</h3>
      <h2 className="text-gradient text-lg md:text-3xl font-semibold mb-8 md:mb-12">
        Promo Kelas Buat Kamu
      </h2>
      <div className="overflow-x-auto scrollbar-default">
        <div className="flex flex-row flexnow items-start gap-x-4">
          {promo.map((promo, index) => (
            <ClassCard key={promo.id} {...promo} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentProduct;
