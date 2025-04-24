import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>}  ,
            {path: '/users', element: <UsersPage/>},
            {path: '/posts', element: <PostsPage/>},
            {path: '/comments', element: <CommentsPage/>},
            {path: '/products', element: <ProductsPage/>},

        ]},
])

export const routesByUseComponents = <BrowserRouter><Routes>
    <Route path={'/'} element={<MainLayout/>}>
        <Route path={'/users'} element={<UsersPage/>}/>
        <Route path={'/posts'} element={<PostsPage/>}/>
        <Route path={'/comments'} element={<CommentsPage/>}/>
        <Route path={'/products'} element={<ProductsPage/>}/>
    </Route>
</Routes>
</BrowserRouter>