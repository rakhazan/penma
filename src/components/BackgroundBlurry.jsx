import React from "react";
import Navbar from "./Navbar";
import { hero } from "../constants/landing";
const BackgroundBlurry = () => {
    return (
        <div className="bg-blurry bg-cover min-h-screen" id="hero">
            <Navbar />
            <div className="flex items-center justify-center h-[80vh]">
                <div className="text-center text-white max-w-xl px-4">
                    <h1 className="text-2xl md:text-4xl font-bold leading-relaxed md:leading-loose">
                        {hero.title}
                    </h1>
                    <p className="mt-4 my-12 text-xs md:text-base">{hero.subtitle}</p>
                    <a
                        href="#"
                        className="py-4 px-12 rounded-full font-medium bg-white text-blue text-sm"
                    >
                        Daftar Sekarang
                    </a>
                </div>
            </div>
        </div>

    );
}

export default BackgroundBlurry;