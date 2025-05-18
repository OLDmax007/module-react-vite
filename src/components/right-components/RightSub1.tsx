import {Outlet} from "react-router-dom";

const RightSub1 = () => {
    return (
        <div>
            <h1>RIGHT SUB LVL 1</h1>
            <Outlet/>
        </div>
    );
};

export default RightSub1;