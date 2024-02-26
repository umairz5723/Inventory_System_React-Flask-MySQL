import './components.css';

function MissingReturn() {
    return (
       <div className='missing-return-container'>
        <div className="missing-button-container">
                <button className="header-button">Missing</button>
            </div>
            
            <div className="returns-button-container">
                <button className="header-button">Returns</button>
            </div>  

       </div>
    )
}

export default MissingReturn;