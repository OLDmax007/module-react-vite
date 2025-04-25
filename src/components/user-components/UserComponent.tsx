import {FC} from "react";
import {UserDMJSModel} from "../../models/UserDMJSModel.ts";
import {Link, useNavigate} from "react-router-dom";

type UserComponentProps = {
    user: UserDMJSModel;
};

const UserComponent: FC<UserComponentProps> = ({ user }) => {
    const navigate = useNavigate()
    const handler = () => {
        navigate('details', {state: user})
    }

    return (
        <ul className="list-decimal p-5">
            <li className="underline"><Link to={'details'} state={user}>{user.username.toUpperCase()}</Link></li>
            <li>{user.email}</li>
            <button onClick={handler}>click</button>
        </ul>
    );
};

export default UserComponent;
