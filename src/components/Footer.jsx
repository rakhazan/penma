import React from "react";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import { navlinks } from "../constants/landing";

const Footer = () => (
  <>
    <div className="bg-white">
      <div className="flex flex-wrap gap-8 items-center justify-center text-center max-w-5xl px-4 md:px-24 py-12 mx-auto">
        <div className="max-w-sm w-full">
          <img
            src="/logo-penma.png"
            alt="logo"
            className="h-8 md:h-12 mb-4 mx-auto"
          />
          <a
            href="#"
            className="text-xs text-white px-4 py-2 bg-gradient-to-tr from-pink-500 to-purple rounded-full"
          >
            <FiInstagram className="inline-block mr-2" /> penma_official
          </a>
        </div>
        <div className="max-w-sm w-full">
          <h6 className="font-semibold text-black text-sm">Menu</h6>
          {navlinks.map((nav, index) => (
            <Link key={nav.id} to={nav.link} className="text-sm block mt-2">
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-black-navy py-2 text-center text-[8pt] text-white font-semibold">
      &#169; Copyright 2023
    </div>
  </>
);

export default Footer;
