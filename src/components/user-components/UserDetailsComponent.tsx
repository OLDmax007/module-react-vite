import {FC} from "react";
import {UserModel} from "../../models/UserModel.ts";

type UserComponentProps = {
    user: UserModel;
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
