import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import {baseUrlDMJS, baseUrlJSPH} from "../constants/urls.ts";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            { path: '/users/jsonplaceholder', element: <UsersPage baseUrl={baseUrlJSPH}/> },
            { path: '/users/dummyjson', element: <UsersPage baseUrl={baseUrlDMJS} /> },
            { path: '/posts/jsonplaceholder', element: <PostsPage baseUrl={baseUrlJSPH}/> },
            { path: '/posts/dummyjson', element: <PostsPage  baseUrl={baseUrlDMJS}/> },
            { path: '/comments/jsonplaceholder', element: <CommentsPage baseUrl={baseUrlJSPH} /> },
            { path: '/comments/dummyjson', element: <CommentsPage baseUrl={baseUrlDMJS} /> }
        ]
    }])
