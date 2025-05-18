import {Outlet} from "react-router-dom";
import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext.tsx";

const LeftSub2 = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={theme}>
            <h1>LEFT SUB LVL 2</h1>
            <button onClick={toggleTheme}>Change theme</button>
            <Outlet/>
        </div>
    );
};

export default LeftSub2;