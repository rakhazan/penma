import ClassCard from "./components/ClassCard";
import FeatureCard from "./components/FeatureCard";
import Navbar from "./components/Navbar";
import { uv, hero, promo } from "./constants/landing";

const App = () => (
  <div className="App">
    {/* Hero */}
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

    <div className="px-4 md:px-24 py-12 md:py-32">
      <h2 className="text-gradient text-lg md:text-3xl font-semibold mb-8 md:mb-12">
        Mengapa Memilih PENMA?
      </h2>
      <div className="flex flex-wrap justify-evenly items-center gap-y-4">
        {uv.map((val, index) => (
          <FeatureCard key={val.id} {...val} index={index} />
        ))}
      </div>
    </div>

    <div className="px-4 md:px-24 py-12 md:py-32">
      <h3 className="text-gradient md:text-2xl font-medium">Kelas Premium</h3>
      <h2 className="text-gradient text-lg md:text-3xl font-semibold mb-8 md:mb-12">
        Promo Kelas Buat Kamu
      </h2>
      <div className="overflow-x-auto scrollbar-default">
        <div className="flex flex-row flexnow items-start gap-x-4">
          {promo.map((promo, index) => (
            <ClassCard key={promo.id} {...promo} index={index} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default App;
