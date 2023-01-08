import { contents } from "../../constants/kewirausahaan";

const Profile = () => {
    return (
        <div>
            <div>
                <div className="mx-auto my-24 h-44 w-52">
                    <img src="../../src/assets/sttnf.png" alt="sttnf" className="" />
                </div>
                {/* {contents.map((content) => (
                    <>
                        <div>{content.title}</div>
                        <div>{content.value}</div>
                    </>
                ))} */}
                <ul>
                    <li className="text-2xl">Visi</li>
                    <li>Pada tahun 2045 menjadi Sekolah Tinggi Teknologi yang unggul di Indonesia, berbudaya inovasi, berjiwa teknopreneur, dan berkarakter religius.</li>
                    <br />
                    <li className="text-2xl">Misi</li>
                    <li>1. Menyelenggarakan pendidikan tinggi berkualitas yang mengembangkan jiwa kepemimpinan dan teknopreneurship berlandaskan iman dan takwa.</li>
                    <li>2. Melaksanakan penelitian yang inovatif dan berorientasi pada pengembangan teknologi masa depan.</li>
                    <li>3. Menyelenggarakan pengabdian kepada masyarakat dengan memanfaatkan teknologi tepat guna.</li>
                    <li>4. Membangun lingkungan akademik yang kondusif bagi terwujudnya kebebasan akademik, otonomi keilmuan, dan budaya inovasi.</li>
                    <br />
                    <li className="text-2xl">Tujuan</li>
                    <li>1. Menghasilkan sarjana yang kompeten, profesional, berakhlak mulia, sehingga mampu berkompetisi di dunia kerja.</li>
                    <li>2. Menghasilkan karya-karya ilmiah dibidang teknologi informasi berwawasan masa depan yang inovatif dan bercirikan keterbukaan (openness) seperti open source, open standar dan open access/content, sehingga bermanfaat bagi bangsa Indonesia dan diakui secara Internasional.</li>
                    <li>3. Menyelenggarakan pengabdian kepada masyarakat dengan memanfaatkan teknologi tepat guna.</li>
                    <li>4. Menciptakan kultur akademik yang inovatif, kompetitif dan kondusif untuk mewujudkan institusi yang unggul dan terkemuka.</li>
                </ul>
            </div>

        </div>
    );
}

export default Profile;