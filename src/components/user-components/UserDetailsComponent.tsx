import {FC} from "react";
import {UserDMJSModel} from "../../models/UserDMJSModel.ts";

type UserComponentProps = {
    user: UserDMJSModel;
};

const UserComponent: FC<UserComponentProps> = ({ user }) => {
    return (
        <ul className="list-decimal p-5">
            <li>{user.id}</li>
            <li>{user.address.state}</li>
            <li>{user.address.city}</li>
            <li>{user.address.address}</li>
            <li>{user.address.country}</li>
        </ul>
    );
};

export default UserComponent;
