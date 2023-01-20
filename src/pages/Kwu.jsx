import { Link, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { content } from "../constants/sttnf";
import { navmini } from "../constants/navmenu";
import Identity from "./blocks/Identity";
import Organization from "./blocks/Organization";
import Profile from "./blocks/Profile";
import Credit from "./blocks/Credit";
import ErrorPage from "./ErrorPage";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const KWU = () => {
  return (
    <>
      <div className="bg-blurry bg-cover" id="hero">
        <Navbar />
      </div>
      <div className="px-4 md:px-24 py-12">
        <img
          src={content.banner}
          alt={content.name}
          className="object-cover object-center h-40 w-full rounded-2xl"
          loading="lazy"
        />
      </div>
      <div className="px-4 md:px-24 py-12 bg-light-3">
        {/* <div className="px-6 py-2 bg-slate-200 rounded-2xl flex items-center justify-center">
          {navmini.map((nav, index) => (
            <Link
              key={nav.id}
              to={nav.link}
              className={`px-6 py-2 ${nav.current ? "text-white" : ""}`}
            >
              {nav.title}
            </Link>
          ))}
        </div>
        <div className="p-6 bg-slate-200 rounded-2xl basis-5/6 ml-2 min-h-screen">
          <Routes>
            <Route
              path="identitas"
              element={<Identity />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="organisasi"
              element={<Organization />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="profile"
              element={<Profile />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="credit"
              element={<Credit />}
              errorElement={<ErrorPage />}
            />
          </Routes>
        </div> */}
        <Tab.Group as={"div"} className={`flex flex-wrap gap-y-4 gap-x-12`}>
          <Tab.List
            className={`flex flex-nowrap md:items-center md:flex-col md:basis-1/5 overflow-x-auto scrollbar-hide rounded-2xl bg-white p-2 md:p-4 space-x-1 md:space-y-1 md:space-x-0 h-fit`}
          >
            <Tab
              className={({ selected }) =>
                classNames(
                  "flex-none w-[150px] md:w-full rounded-xl py-4 text-sm font-medium focus:outline-none",
                  selected
                    ? "bg-gradient-to-r from-blue/70 to-purple/70 text-white"
                    : "hover:bg-slate-300"
                )
              }
            >
              Profil
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "flex-none w-[150px] md:w-full rounded-xl py-4 text-sm font-medium focus:outline-none",
                  selected
                    ? "bg-gradient-to-r from-blue/60 to-purple/60 text-white"
                    : "hover:bg-slate-300"
                )
              }
            >
              Identitas
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "flex-none w-[150px] md:w-full rounded-xl py-4 text-sm font-medium focus:outline-none",
                  selected
                    ? "bg-gradient-to-r from-blue/60 to-purple/60 text-white"
                    : "hover:bg-slate-300"
                )
              }
            >
              Organisasi
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "flex-none w-[150px] md:w-full rounded-xl py-4 text-sm font-medium focus:outline-none",
                  selected
                    ? "bg-gradient-to-r from-blue/60 to-purple/60 text-white"
                    : "hover:bg-slate-300"
                )
              }
            >
              Credit
            </Tab>
          </Tab.List>
          <Tab.Panels
            className={`px-4 py-6 md:p-12 bg-white rounded-2xl shadow-lg shadow-purple/20 md:flex-1`}
          >
            <Tab.Panel>
              <Profile />
            </Tab.Panel>
            <Tab.Panel>
              <Identity />
            </Tab.Panel>
            <Tab.Panel>
              <Organization />
            </Tab.Panel>
            <Tab.Panel>
              <Credit />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <Footer />
    </>
  );
};

export default KWU;
