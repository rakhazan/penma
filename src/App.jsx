import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import KWU from "./pages/Kwu";
import Landing from "./pages/Landing";

const App = () => (
  <div className="root">
    <Routes>
      <Route path="/" element={<Landing />} errorElement={<ErrorPage />} />
      <Route path="/sttnf" element={<KWU />} errorElement={<ErrorPage />} />
    </Routes>
  </div>
);

export default App;
