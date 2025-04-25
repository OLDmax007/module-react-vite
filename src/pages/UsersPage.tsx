import {UrlModel} from "../models/UrlModel.ts";
import {FC} from "react";
import UsersComponent from "../components/user-components/UsersComponent.tsx";
import {Outlet} from "react-router-dom";


type UsersPageProps = {
    baseUrl: UrlModel;
}

const UsersPage: FC<UsersPageProps> = ({ baseUrl }) => {
    return (
        <div>
            <UsersComponent baseUrl={baseUrl}/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;
