import {useAppSelector} from "../hooks/useAppSelector.ts";
import {UserType} from "../models/types/UserType.ts";
import useAppFetch from "../hooks/useAppFetch.ts";
import {getAll} from "../services/api.jspl.service.ts";
import {userSliceActions} from "../redux/user-slice/userSlice.ts";


const UsersPage = () => {
    const users = useAppSelector(state => state.userSlice.users);

    useAppFetch<UserType[]>(async () => {
        return await getAll<UserType[]>('users')
    }, userSliceActions.loadUsers)

    return (
        <div>
            {
                users.map((user: UserType) => {
                    return <div key={user.id}>{user.name}</div>;
                })
            }
        </div>
    );
};

export default UsersPage;
