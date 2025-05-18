import {Outlet} from "react-router-dom";

const LeftSub1 = () => {
    return (
        <div>
            <h1>LEFT SUB LVL 1</h1>
            <Outlet/>
        </div>
    );
};

export default LeftSub1;