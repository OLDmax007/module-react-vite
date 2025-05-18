import {Outlet} from "react-router-dom";
import {useContext} from "react";
import CounterContext from "../../context/CounterContext.tsx";

const LeftSub3 = () => {
    const {inc, dec} = useContext(CounterContext)

    return (
        <div>
            <h1>LEFT SUB LVL 3</h1>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
            <Outlet/>
        </div>
    );
};

export default LeftSub3;