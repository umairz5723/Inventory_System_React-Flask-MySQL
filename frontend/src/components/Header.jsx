import { Link } from 'react-router-dom';
import './components.css'; 

function Header() {
    return (
        <header className="header">
            
            <div className="top-left">
            <Link to="/products"> <button className="header-button">Products</button> </Link>
            </div>
            
            <div className="top-middle">
                <button className="header-button">Orders</button>
            </div>
            
            <div className="top-right">
                <button className="header-button">Vendors</button>
            </div>
        
        </header>
    );
}

export default Header;