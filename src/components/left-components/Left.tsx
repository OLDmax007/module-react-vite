import {Outlet} from "react-router-dom";

const Left = () => {
    return (
        <div>
            <h1>LEFT</h1>
            <Outlet/>
        </div>
    );
};

export default Left;