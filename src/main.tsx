import './index.css'
import {createRoot} from "react-dom/client";
import {routes} from "./routes/routes.tsx";
import {RouterProvider} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes}/>
)
