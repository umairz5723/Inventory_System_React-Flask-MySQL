import { Link } from 'react-router-dom';
import './components.css'; 

function Header() {
    return (
        <header className="header">
            
            <div className="top-left">
            <   Link to="/products"> <button className="header-button">Products</button> </Link>
            </div>
            
            <div className="top-middle">
                <Link to="/orders">    <button className="header-button">Orders</button> </Link>
            </div>
            
            <div className="top-right">
            <Link to = "/vendors">   <button className="header-button">Vendors</button> </Link> 
            </div>
        
        </header>
    );
}

export default Header;