import {FC} from "react";
import {UserDMJSModel} from "../../models/UserDMJSModel.ts";

type UserComponentProps = {
    user: UserDMJSModel;
};

const UserComponent: FC<UserComponentProps> = ({ user: { username, email } }) => {
    return (
        <ul className="list-decimal p-5">
            <li className="underline">{username.toUpperCase()}</li>
            <li>{email}</li>
        </ul>
    );
};

export default UserComponent;
