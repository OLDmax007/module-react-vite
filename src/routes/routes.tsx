import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import {baseUrlDMJS} from "../constants/urls.ts";
import UserDetailsPage from "../pages/UserDetailsPage.tsx";
import CartsPage from "../pages/CartsPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            { path: 'users', element: <UsersPage baseUrl={baseUrlDMJS} />, children: [
                    {path: 'details', element: <UserDetailsPage/>},
                    // {path: ':userId/carts', element: <CartsPage/>}
                ]},
            {path: 'users/:userId/carts', element: <CartsPage/>}
        ]
    }])
