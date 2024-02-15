import React, {useState} from 'react'
import Search from "../features/Search";
import NavBar from '../../NavBar';
import './BookList.css';
import './Navbar.css'; 




function BooksList({books}) {

    const [flip, setFlip] = useState(true)
    const [read, readReturn] = useState(true)

    


    return (
    <div>
         <div>
            <div className="nav-flex-container">
                <div className="nav-flex-child">
                    <div className="img">
                        <img class="img" src="/images/bookend.jpg" alt="bookendlogo"/>
                    </div>
                </div>
                    <div className="nav-flex-child">
                        <div className="nav"><NavBar /></div>
                    </div>
                </div>
            <hr></hr>  
        </div> 
            <div className='books-wrapper'>
                <div className='search-wrapper'>
                    <div className='search-bar-div'>
                        <div className="search-container">
                            <input type="text" class="search-bar"
                                placeholder="Search books by title or author..." 
                                value="placeholder text"
                                // onChange={ENTER CODE HERE}
                            />
                    </div>
                </div>
                </div>
                    <div>
                        <div className="bookcard" onClick={() => setFlip(prev => !prev)}>
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
                        <button type="click" onClick={() => readReturn(prev => !prev)}>{read ? "Read" : "Return"} </button>                
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BooksList;