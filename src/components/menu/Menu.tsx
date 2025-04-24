import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to={"/users/jsonplaceholder"}>Users (JSONPlaceholder)</Link></li>
                <li><Link to={"/users/dummyjson"}>Users (DummyJSON)</Link></li>
                <li><Link to={"/posts/jsonplaceholder"}>Posts (JSONPlaceholder)</Link></li>
                <li><Link to={"/posts/dummyjson"}>Posts (DummyJSON)</Link></li>
                <li><Link to={"/comments/jsonplaceholder"}>Comments (JSONPlaceholder)</Link></li>
                <li><Link to={"/comments/dummyjson"}>Comments (DummyJSON)</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;