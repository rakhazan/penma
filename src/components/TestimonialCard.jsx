import React from "react";
import { ImQuotesRight } from "react-icons/im";

const TestimonialCard = ({ username, text }) => (
  <>
    <div className="flex flex-col gap-4 max-w-sm px-4 sm:px-6 py-6 bg-white rounded-2xl drop-shadow-xl">
      <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
        {text}
      </p>
      <span className="text-end">
        <ImQuotesRight />
      </span>
      <div className="flex flex-row items-center gap-2">
        <img
          src="/src/assets/default-user.png"
          alt="user"
          className="w-10 md:w-12 h-10 md:h-12"
        />
        <p className="text-sm sm:text-lg md:text-xl text-black font-medium">
          {username}
        </p>
      </div>
    </div>
  </>
);

export default TestimonialCard;
