import React from "react";
import { ImQuotesRight } from "react-icons/im";

const TestimonialCard = ({ username, text }) => (
  <>
    <div className="flex flex-col gap-4 max-w-sm px-4 py-6 bg-white rounded-2xl drop-shadow-xl">
      <p className="text-sm text-black leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolorem
        error. Quas provident tenetur inventore laboriosam a alias id eum quam
        itaque, veniam ex ea neque facilis at placeat impedit officia optio.
      </p>
      <span className="text-end">
        <ImQuotesRight />
      </span>
      <div className="flex flex-row items-center gap-2">
        <img
          src="/src/assets/default-user.png"
          alt="user"
          className="w-10 h-10"
        />
        <p className="text-sm text-black font-medium">Bagas Fauzan</p>
      </div>
    </div>
  </>
);

export default TestimonialCard;
