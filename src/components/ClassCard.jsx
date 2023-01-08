import React from "react";
import icStar from "../assets/icons/star.svg";
import { IoWalletOutline } from "react-icons/io5";

const Tag = ({ icon, tag }) => {
  icon = icon ? (
    <img src={icon} alt="icon" className="w-2 md:w-4 h-2 md:h-4" />
  ) : (
    icon
  );
  return (
    <>
      <div className="p-1 px-4 rounded-full bg-slate-100">
        <small className="text-[6pt] md:text-xs font-semibold text-black flex items-center gap-1">
          {icon}
          {tag}
        </small>
      </div>
    </>
  );
};

const ClassCard = ({
  banner,
  className,
  mentor,
  tags,
  rating,
  price,
  promoPrice,
}) => (
  <>
    <div className="bg-white w-[90%] max-w-sm flex-none rounded-2xl overflow-hidden">
      <img
        src={banner}
        alt={`Banner ${className}`}
        className="w-max rounded-2xl"
      />
      <div className="px-4 py-6 flex flex-col gap-4 md:gap-12">
        <span>
          <h5 className="text-sm sm:text-lg md:text-xl text-black font-semibold mb-4">
            {className}
          </h5>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag.tag} icon={tag.icon} />
            ))}
          </div>
        </span>
        <div className="flex flex-wrap gap-2 items-baseline">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple">
            {promoPrice}
          </p>
          <small className="line-through decoration-2 text-red-700">
            {price}
          </small>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <img
            src={mentor.profile}
            alt={`Mentor ${mentor.name}`}
            className="w-12 h-12"
          />
          <div className="flex flex-col flex-grow items-start">
            <p className="text-xs sm:text-base text-black">{mentor.name}</p>
            <small className="text-[8pt] sm:text-sm ">
              {mentor.profession}
            </small>
          </div>
        </div>
        <div className="flex gap-4 justify-between items-center">
          <p className="text-sm md:text-base font-medium text-black flex itens-center gap-1">
            <img
              src={icStar}
              alt="icon star"
              className="w-4 md:w-6 h-4 md:h-6"
            />
            {rating}
          </p>
          <button className="py-2 md:px-12 flex-1 md:flex-none text-black text-xs md:text-base font-medium border border-black rounded-full">
            <div className="flex items-center justify-center gap-2">
              <IoWalletOutline />
              Beli Sekarang
            </div>
          </button>
        </div>
      </div>
    </div>
  </>
);

export default ClassCard;
