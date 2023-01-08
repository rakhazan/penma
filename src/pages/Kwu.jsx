import Navbar from "../components/Navbar";
import { content } from "../constants/landing";

const KWU = () => {
    return (
        <div className="bg-blurry bg-cover min-h-screen" id="hero">
            <Navbar />
            <div className="p-6 mx-24 bg-gray-200 rounded-xl">
                {content.map((content) => (
                    <img src={content.banner} alt={content.name} /> 
                ))}
            </div>
        </div>
    );
}

export default KWU;