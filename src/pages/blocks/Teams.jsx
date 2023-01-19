import React from "react";
import TeamCard from "../../components/TeamCard";
import { teams } from "../../constants/landing";

const Teams = () => (
  <div className="px-4 md:px-12 lg:px-24 py-12 md:py-24">
    <h2 className="text-gradient text-lg md:text-3xl font-semibold mb-8 md:mb-12">
      Mari Berkenalan
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
      {teams.map((team, index) => (
        <TeamCard key={index} {...team} />
      ))}
    </div>
  </div>
);

export default Teams;
