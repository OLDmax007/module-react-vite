import UserDetailsComponent from "../components/user-components/UserDetailsComponent.tsx";
import {useLocation} from "react-router-dom";
import {UserDMJSModel} from "../models/UserDMJSModel.ts";

const UserDetailsPage = () => {
    const {state} = useLocation();
    const user = state as UserDMJSModel


    return (
        <div>
            <UserDetailsComponent user={user}/>
            </div>
    );
};

export default UserDetailsPage;