import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage/UsersPage.tsx";
import PostsPage from "../pages/PostsPage/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage/CommentsPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            { path: '/users/jsonplaceholder', element: <UsersPage /> },
            { path: '/users/dummyjson', element: <UsersPage /> },
            { path: '/posts/jsonplaceholder', element: <PostsPage /> },
            { path: '/posts/dummyjson', element: <PostsPage /> },
            { path: '/comments/jsonplaceholder', element: <CommentsPage /> },
            { path: '/comments/dummyjson', element: <CommentsPage /> }
        ]
    }])
