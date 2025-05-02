import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <nav>
            <ul>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'cars'}>Cars</Link></li>
                <li><Link to={'cars/create'}>Create car</Link></li>
            </ul>
        </nav>
    );
};

export default MenuComponent;