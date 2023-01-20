import { contentIdentity } from "../../constants/sttnf";
import sttnf from "/src/assets/sttnf.png";

const Identity = () => (
  <>
    <img src={sttnf} alt="sttnf" className="w-24 md:w-32 mx-auto mb-6" />
    <div>
      <ol className="list-decimal list-outside">
        {contentIdentity.map((content, index) => (
          <li key={index} className="text-black ml-4">
            {content}
          </li>
        ))}
      </ol>
    </div>
  </>
);

export default Identity;
