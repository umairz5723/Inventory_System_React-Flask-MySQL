import Header from '../../components/Header.jsx';
import VendorsList from '../../components/VendorsList.jsx';

function Products() {
    return (
    <div className = "home-container"> 
        <Header />
    <div className = "home-background">
        <h1>VENDORS PAGE</h1>
        <VendorsList/>
        </div>
    </div>
   
    );
}

export default Products;