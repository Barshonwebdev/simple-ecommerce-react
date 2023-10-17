import { Link } from 'react-router-dom';
import logo from '../../../images/Logo.svg'
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../providers/authProvider';
const Header = () => {
    const {user,logOut}= useContext(AuthContext);
    const handleLogout=()=>{
        logOut()
        .then(result=>{})
        .catch(error=>console.log(error));
    }
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">SignUp</Link>
                {user && <span className='text-white'> {user.email}<button onClick={handleLogout}>Logout</button></span>}
            </div>
            
        </nav>
    );
};

export default Header;