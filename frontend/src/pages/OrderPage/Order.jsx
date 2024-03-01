import Header from '../../components/Header.jsx';
import OrdersList from '../../components/OrdersList.jsx';

function Order() {
    return (
        <div className = "home-container"> 
            <Header />
        <div className = "home-background">
            <h1>The following items need to be reordered:</h1>
            <OrdersList/>
        </div>
    </div>
   
    );
}

export default Order;