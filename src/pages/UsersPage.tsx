import {useAppSelector} from "../hooks/useAppSelector.ts";
import {Link} from "react-router-dom";
import useAppFetch from "../hooks/useAppFetch.ts";
import LoadingComponent from "../components/LoadingComponent.tsx";
import asyncActions from "../redux/slices/user/asyncActions.ts";
import {UserType} from "../models/types/user/UserType.ts";


const UsersPage = () => {
    console.log("users rerender", performance.now());
    const {users, loading} = useAppSelector(state => state.userSlice);

    useAppFetch( asyncActions.loadUsers)

    console.log(users)

    return (
        <ul>
            {!loading && <LoadingComponent/>}
            {
                users.map((user: UserType) => (
                     <Link key={user.id} to={'/users/' + user.id}>
                        <li>{user.name}</li>
                    </Link>
                ))
            }
        </ul>
    );
};

export default UsersPage;
