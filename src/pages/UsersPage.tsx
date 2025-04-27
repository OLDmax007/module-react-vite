import {UrlModel} from "../models/UrlModel.ts";
import {FC} from "react";
import UsersComponent from "../components/user-components/UsersComponent.tsx";
import {Outlet} from "react-router-dom";
import Pagination from "../components/pagination/Pagination.tsx";


type UsersPageProps = {
    baseUrl: UrlModel;
}

const UsersPage: FC<UsersPageProps> = ({ baseUrl }) => {
    return (
        <>
            <UsersComponent baseUrl={baseUrl}/>
            <Pagination/>
            <Outlet/>
        </>
    );
};

export default UsersPage;
