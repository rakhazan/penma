import { contents } from "../../constants/kewirausahaan";

const Profile = () => {
    return (
        <div>
            <div>
                <h1 className="">
                    {contents.map((con, index) => (
                        <>
                            <div>{con.title}</div>
                            <ul>
                                <li>{con.value}</li>
                            </ul>
                        </>
                    ))}
                </h1>
            </div>

        </div>
    );
}

export default Profile;