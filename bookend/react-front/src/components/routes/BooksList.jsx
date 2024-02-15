import React, {useEffect, useState} from 'react'
import Search from "../features/Search";
import NavBar from '../../NavBar';
import './BookList.css';
import './Navbar.css'; 
import BookMap from "./BookMap"





function BooksList({book}) {

    const [flip, setFlip] = useState(true)
    const [read, readReturn] = useState(true)


    const [books, setBooks] = useState([])


    useEffect(() => {
    fetch('http://127.0.0.1:5000/books')
    .then(resp => resp.json())
    .then(data =>setBooks(data))
    }, []);
    
    console.log(books.books)



    


    return (
    <div>
         <div>
            <div className="nav-flex-container">
                <div className="nav-flex-child">
                    <div className="img">
                        <img className="img" src="/images/bookend.jpg" alt="bookendlogo"/>
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
                            <input type="text" className="search-bar"
                                placeholder="Search books by title or author..." 
                                // value and on change needed
                            />
                    </div>
                </div>
                </div>
                    <div>
                        <div className="bookcard" onClick={() => setFlip(prev => !prev)}>
                        {
                            flip ?
                            <div className="bookfront">
                                {books.books.map(book => (
                                <h3>{book.title},
                                {book.author},
                                {book.genre}</h3>))}
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