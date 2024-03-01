import Header from '../../components/Header.jsx';
import AddProductForm from '../../components/AddProductForm.jsx';
import './Products.css';


function AddProduct() {
    return (
        <div className = "home-container"> 
            <Header />
        
        <div className = "home-background">
            <AddProductForm />
        </div>
        
        </div>
    )
}

export default AddProduct;