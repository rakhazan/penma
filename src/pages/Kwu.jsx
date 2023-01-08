import { Link, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { content, navmini } from "../constants/landing";
import Identity from "./blocks/Identity";
import Organization from "./blocks/Organization";
import Profile from "./blocks/Profile";
import ErrorPage from "./ErrorPage";

const KWU = () => {
  return (
    <div className="bg-blurry bg-cover min-h-screen" id="hero">
      <Navbar />
      <div className="mx-24 mb-4 gap-2">
        <img
          src={content.banner}
          alt={content.name}
          className="object-cover object-center h-40 w-full rounded-2xl"
        />
      </div>
      <div className="mx-24 flex">
        <div className="p-6 bg-slate-200 rounded-2xl basis-1/6 mr-2 flex flex-col items-start">
          <div className="text-2xl mb-6">Profile</div>
          {navmini.map((nav, index) => (
            <Link
              to={nav.link}
              className={`px-6 py-2 ${nav.current ? "text-white" : ""}`}
            >
              {nav.title}
            </Link>
          ))}
        </div>
        <div className="p-6 bg-slate-200 rounded-2xl basis-5/6 ml-2">
          <Routes>
            <Route
              path="/sttnf/identitas"
              element={<Identity />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/sttnf/organisasi"
              element={<Organization />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/sttnf/profile"
              element={<Profile />}
              errorElement={<ErrorPage />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default KWU;
