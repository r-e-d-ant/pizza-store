
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="header">
            <div className="logo"><img src="assets/images/logo.svg" alt="" className="image"></img></div>
            <nav className="nav-bar">
                <ul className="nav-items">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
                </ul>
            </nav>
        </div>
    );
}
 
export default NavBar;