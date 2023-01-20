import sttnf from "/src/assets/sttnf.png";
import { teams } from "../../constants/landing";

const Credit = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-12">
      <h1 className="text-2xl md:text-3xl font-semibold text-gradient text-center">
        Daftar Anggota Kelompok Bebek Company
      </h1>
      <img src={sttnf} alt="sttnf" className="w-24 md:w-32 mx-auto" />
      <ul className="text-navy">
        {teams.map((team) => (
          <li key={team.nim}>
            <p className="md:text-center mb-1">
              {team.name} - {team.nim}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Credit;
