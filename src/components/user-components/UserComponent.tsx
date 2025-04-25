import {FC} from "react";
import {UserModel} from "../../models/UserModel.ts";
import {Link, useNavigate} from "react-router-dom";

type UserComponentProps = {
    user: UserModel;
};

const UserComponent: FC<UserComponentProps> = ({ user }) => {
    const navigate = useNavigate()
    const handleOnClickDetails = () => {
        navigate('details', {state: user})
    }

    const handleOnClickCarts = () => {
        navigate(`${user.id}/carts`)
    }

    return (
        <ul className="list-decimal p-5">
            <li className="underline"><Link to={'details'} state={user}>{user.username.toUpperCase()}</Link></li>
            <li>{user.email}</li>
            <button onClick={handleOnClickDetails}>click details</button>
            <button onClick={handleOnClickCarts}>click for look carts</button>

        </ul>
    );
};

export default UserComponent;
