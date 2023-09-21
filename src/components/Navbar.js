import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>DND Gallery</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/login" className="login-link">Login</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;