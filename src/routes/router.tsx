import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import CreateCarPage from "../pages/CreateCarPage.tsx";


export const routes = createBrowserRouter([
    {path:'', element:  <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'cars', element: <CarsPage/>},
            {path: 'cars/create', element: <CreateCarPage/>}
        ] }
])