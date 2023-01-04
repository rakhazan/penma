import React from "react";
import { uv } from "../constants/landing";
import FeatureCard from "./FeatureCard";

const ContentPurpose = () => {
    return (
        <div className="px-4 md:px-24 py-12 md:py-24">
            <h2 className="text-gradient text-lg md:text-3xl font-semibold mb-8 md:mb-12">
                Mengapa Memilih PENMA?
            </h2>
            <div className="flex flex-wrap justify-evenly items-center gap-y-4">
                {uv.map((val, index) => (
                    <FeatureCard key={val.id} {...val} index={index} />
                ))}
            </div>
        </div>
    );
}

export default ContentPurpose;