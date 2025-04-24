import { FC } from "react";
import { UserUnifiedModel } from "../../models/user-models/UserUnifiedModel.ts";

type UserComponentProps = {
    user: UserUnifiedModel;
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
