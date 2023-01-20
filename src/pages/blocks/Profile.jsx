import { contents } from "../../constants/sttnf";
import sttnf from "/src/assets/sttnf.png";

const Profile = () => {
  return (
    <>
      <img src={sttnf} alt="sttnf" className="w-24 md:w-32 mx-auto mb-6" />
      <ul>
        {contents.map((content) => (
          <li key={content.title} className="mb-4 md:mb-6">
            <h2 className="text-2xl text-navy font-semibold">
              {content.title}
            </h2>
            {!Array.isArray(content.value) ? (
              <p className="text-black">{content.value}</p>
            ) : (
              <ol className="list-decimal list-outside ml-4">
                {content.value.map((value, index) => (
                  <li key={index} className="text-black">
                    {value}
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Profile;
