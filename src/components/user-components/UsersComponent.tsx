import {FC, useEffect, useState} from "react";
import {getAll} from "../../services/base.api.service.ts";
import {BaseResponseModel} from "../../models/BaseResponseModel.ts";
import UserComponent from "./UserComponent.tsx";
import {UrlModel} from "../../models/UrlModel.ts";
import {UserModel} from "../../models/UserModel.ts";

type UsersComponentProps = {
    baseUrl: UrlModel;
};

const UsersComponent: FC<UsersComponentProps> = ({ baseUrl }) => {
    const [users, setUsers] = useState<UserModel[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
                const response = await getAll<BaseResponseModel & { users: UserModel[] }>(
                    baseUrl,
                        'users'
                );
                setUsers(response.users);
        };

        fetchUsers();
        return () => {
            console.log('completed')
        }
    }, [baseUrl]);

    return (
        <div className="grid grid-cols-4 gap-4">
            {users.map((user: UserModel) => (
                <UserComponent user={user} key={user.id} />
            ))}
        </div>
    );
};

export default UsersComponent;
