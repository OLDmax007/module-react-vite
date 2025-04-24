import Menu from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <header>
                <Menu/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default MainLayout;