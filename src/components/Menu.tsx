import {Link} from "react-router";

const Menu = () => {
    console.log("Menu render")
    return (
            <nav>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="left">LEFT</Link></li>
                    <li><Link to="left/sub1">LEFT SUB 1</Link></li>
                    <li><Link to="left/sub1/sub2">LEFT SUB 2</Link></li>
                    <li><Link to="left/sub1/sub2/sub3">LEFT SUB 3</Link></li>
                    <li><Link to="right">RIGHT</Link></li>
                    <li><Link to="right/sub1">RIGHT SUB 1</Link></li>
                    <li><Link to="right/sub1/sub2">RIGHT SUB 2</Link></li>
                    <li><Link to="right/sub1/sub2/sub3">RIGHT SUB 3</Link></li>
                </ul>
            </nav>
    );
}
export default Menu;