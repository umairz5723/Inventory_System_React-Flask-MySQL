import Header from '../../components/Header.jsx';
import './Home.css';
function Home() {
    return (
        <div className = "home-container"> 
            <Header />
            <div className = "home-background">
                <div className = "home-display-box"> 
                    <h1> Inventory </h1>
                    <h1> Management </h1>
                    <h1> System </h1>
                </div>
            </div>
        </div>
   
    );
}

export default Home;