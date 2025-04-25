import UserDetailsComponent from "../components/user-components/UserDetailsComponent.tsx";
import {useLocation} from "react-router-dom";
import {UserModel} from "../models/UserModel.ts";

const UserDetailsPage = () => {
    const {state} = useLocation();
    const user = state as UserModel


    return (
        <div>
            <UserDetailsComponent user={user}/>
            </div>
    );
};

export default UserDetailsPage;