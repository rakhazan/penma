import { contentIdentity } from "../../constants/sttnf";
import sttnf from "/src/assets/sttnf.png";

const Identity = () => {
  return (
    <div>
      <div className="mx-auto my-24 h-44 w-52">
        <img src={sttnf} alt="sttnf" className="" />
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
};

export default Identity;
