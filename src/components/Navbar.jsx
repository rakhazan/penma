import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="px-8 py-6 flex ">
    <Link to="/">
      <h1 className="text-xl text-white font-bold">Penma</h1>
    </Link>
    <div className="grow"></div>
    <Link to="/article"><h1 className="text-xl text-white font-bold">Kewirausahaan</h1></Link>
  </div>
);

export default Navbar;
