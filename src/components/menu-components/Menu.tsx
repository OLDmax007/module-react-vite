import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to={''}>Home page</Link></li>
                <li><Link to={"/users"}>Users </Link></li>
                <li><Link to={"/posts"}>Posts </Link></li>
            </ul>
        </nav>
    );
};

export default Menu;