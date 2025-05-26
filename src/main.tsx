import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import store from "./redux/store.ts";
import {Provider} from "react-redux";
import UserPage from "./pages/UserPage.tsx";
import PostPage from "./pages/PostPage.tsx";

const routes = createBrowserRouter([
    {path: '/', element: <App/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:userId', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'posts/:postId', element: <PostPage/>}
        ]},
])

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
            <RouterProvider router={routes}/>
            </Provider>
);
