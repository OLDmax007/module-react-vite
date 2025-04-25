import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import {baseUrlDMJS} from "../constants/urls.ts";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            { path: '/users', element: <UsersPage baseUrl={baseUrlDMJS} /> },
            { path: '/posts', element: <PostsPage  baseUrl={baseUrlDMJS}/> },
        ]
    }])
