import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import KWU from "./components/Kwu";
import LandingPage from "./components/LandingPage"

const App = () => (
  <div className="root">
    <Routes>
      <Route path="/" element={<LandingPage />} errorElement={<ErrorPage/>}/>
      <Route path="/article" element={<KWU />} errorElement={<ErrorPage/>}/>
    </Routes>
  </div>
);

export default App;
