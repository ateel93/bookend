import React, {useState} from 'react'
import Search from "../features/Search";
import NavBar from '../../NavBar';

function BooksList() {

    const [flip, setFlip] = useState(true)

    return (
        // Map goes here for all books
    <div>
        <header>
            <img src="/images/bookend.jpg" alt="bookendlogo"/>
            <NavBar />
        </header> 
        <hr></hr>  
        <div className='search'>
            <Search />
        </div>
            <div>
                <div className="book" onClick={() => setFlip(prev => !prev)}>
                {
                    flip ?
                    <div className="bookfront">
                        <h3>Title Here</h3>
                        <h3>Author Here</h3>
                        <h3>Genre Here</h3>
                        
                    </div>
                    :
                    <div className="bookback">
                        <h3>Description Here</h3>
                    </div>
                }
                </div>
                <button type="click">Read</button>  
            </div>
        
    </div>
    );
}

export default BooksList;