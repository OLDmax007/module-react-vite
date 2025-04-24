import {URLType} from "../models/UrlModel.ts";
import {FC} from "react";
import UsersComponent from "../components/user-components/UsersComponent.tsx";


interface UsersPageProps {
    baseUrl: URLType;
}

const UsersPage: FC<UsersPageProps> = ({ baseUrl }) => {
    return (
        <div>
            <UsersComponent baseUrl={baseUrl}/>
        </div>
    );
};

export default UsersPage;
