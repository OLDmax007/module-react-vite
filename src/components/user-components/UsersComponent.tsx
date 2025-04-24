import {FC, useEffect, useState} from "react";
import {getAll} from "../../services/base.api.service.ts";
import {BaseResponseModel} from "../../models/BaseResponseModel.ts";
import {urls} from "../../constants/urls.ts";
import UserComponent from "./UserComponent.tsx";
import {URLType} from "../../models/UrlModel.ts";
import {UserDMJSModel} from "../../models/UserDMJSModel.ts";

type UsersComponentProps = {
    baseUrl: URLType;
};

const UsersComponent: FC<UsersComponentProps> = ({ baseUrl }) => {
    const [users, setUsers] = useState<UserDMJSModel[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
                const response = await getAll<BaseResponseModel & { users: UserDMJSModel[] }>(
                    baseUrl,
                    urls.dmjs.users
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
            {users.map((user: UserDMJSModel) => (
                <UserComponent user={user} key={user.id} />
            ))}
        </div>
    );
};

export default UsersComponent;
