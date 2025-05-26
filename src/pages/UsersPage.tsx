import {useAppSelector} from "../hooks/useAppSelector.ts";
import {UserType} from "../models/types/UserType.ts";
import {Link} from "react-router-dom";
import useAppFetch from "../hooks/useAppFetch.ts";
import LoadingComponent from "../components/LoadingComponent.tsx";
import userSliceAsyncActions from "../redux/slices/user/userSliceAsyncActions.ts";


const UsersPage = () => {
    const {users, loading} = useAppSelector(state => state.userSlice);

    useAppFetch( userSliceAsyncActions.loadUsers)

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
