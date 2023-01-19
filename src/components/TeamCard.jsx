import React from "react";
import user from "../assets/default-user.png";

const TeamCard = ({ photo, name, nim, role }) => (
  <>
    <div className="w-full max-w-sm rounded-3xl bg-white px-2 py-4 md:p-8">
      <div className="flex items-center gap-4">
        <img
          src={user}
          alt="profile"
          className="rounded-full w-16 md:w-24 h-16 md:h-24"
        />
        <div className="">
          <h6 className="text-purple text-lg md:text-xl font-semibold">
            {name}
          </h6>
          <p className="text-xs md:text-base">
            <span className="text-black-navy">{nim}</span> | {role}
          </p>
        </div>
      </div>
    </div>
  </>
);

export default TeamCard;
