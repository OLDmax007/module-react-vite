import {FC, useEffect, useState} from "react";
import {getAll} from "../../services/base.api.service.ts";
import {BaseResponseModel} from "../../models/BaseResponseModel.ts";
import {baseUrlDMJS, baseUrlJSPH, urls} from "../../constants/urls.ts";
import UserComponent from "./UserComponent.tsx";
import {URLType} from "../../models/UrlModel.ts";
import {UserUnifiedModel} from "../../models/user-models/UserUnifiedModel.ts";

type UsersComponentProps = {
    baseUrl: URLType;
};

const UsersComponent: FC<UsersComponentProps> = ({ baseUrl }) => {
    const [users, setUsers] = useState<UserUnifiedModel[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            if (baseUrl === baseUrlDMJS) {
                const response = await getAll<BaseResponseModel & { users: UserUnifiedModel[] }>(
                    baseUrl,
                    urls.dmjs.users
                );
                setUsers(response.users);
            } else if (baseUrl === baseUrlJSPH) {
                const response = await getAll<UserUnifiedModel[]>(
                    baseUrl,
                    urls.jsph.users
                );
                setUsers(response);
            }
        };

        fetchUsers();
        return () => {
            console.log('completed')
        }
    }, [baseUrl]);

    return (
        <div className="grid grid-cols-4 gap-4">
            {users.map((user: UserUnifiedModel) => (
                <UserComponent user={user} key={user.id} />
            ))}
        </div>
    );
};

export default UsersComponent;
