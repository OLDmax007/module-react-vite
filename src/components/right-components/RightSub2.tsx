import {Outlet} from "react-router-dom";
import {useContext} from "react";
import CounterContext from "../../context/CounterContext.tsx";

const RightSub2 = () => {
    const {count} = useContext(CounterContext)

    return (
        <div>
            <span>{count}</span>
            <h1>RIGHT SUB LVL 2</h1>
            <Outlet/>
        </div>
    );
};

export default RightSub2;