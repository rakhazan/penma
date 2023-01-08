import { contentIdentity } from "../../constants/kewirausahaan";

const Identity = () => {
    return (
        <div>
            <div className="mx-auto my-24 h-44 w-52">
                <img src="../../src/assets/sttnf.png" alt="sttnf" className="" />
            </div>
            <div>
                {contentIdentity.map((content) => (
                    <ul>
                        <li>{content.value}</li>
                        <br />
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default Identity;