import './index.css'
import {createRoot} from "react-dom/client";
import {routesByUseComponents} from "./routes/routes.tsx";

createRoot(document.getElementById('root')!).render(
    routesByUseComponents
)
