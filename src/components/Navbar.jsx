import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { navlinks } from "../constants/landing";

const NavDropdown = () => (
  <Menu as={`div`} className="relative text-left">
    <Menu.Button className="p-2 bg-navy/30 rounded-md border border-navy">
      <FiMenu />
    </Menu.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        className={`absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        {navlinks.map((nav, index) => (
          <Menu.Item>
            {({ active }) => (
              <Link
                to={nav.link}
                className={`${active && "text-blue"} block px-4 py-2 text-sm`}
              >
                {nav.title}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Transition>
  </Menu>
);

const NavExpanded = () => (
  <>
    <div className="flex flex-row items-center text-center">
      {navlinks.map((nav, index) => (
        <Link
          to={nav.link}
          className={`px-6 py-2 ${nav.current ? "text-white" : ""}`}
        >
          {nav.title}
        </Link>
      ))}
    </div>
  </>
);

const Navbar = () => {
  return (
    <div className="px-4 md:px-24 py-6">
      <nav className="flex items-center justify-between">
        <a href="#">
          <img src="/logo-penma-white.png" alt="logo penma" className="w-28" />
        </a>
        <div className="block md:hidden">
          <NavDropdown />
        </div>
        <div className="hidden md:block">
          <NavExpanded />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
