import React, {useEffect, useState} from 'react'
import Search from "../features/Search";
import NavBar from '../../NavBar';
import './BookList.css';
import './Navbar.css'; 
import BookMap from "./BookMap"







function BooksList({book}) {

    const [flip, setFlip] = useState(true)
    const [read, readReturn] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')


    const [books, setBooks] = useState([])


    useEffect(() => {
    fetch('http://127.0.0.1:5000/books')
    .then(resp => resp.json())
    .then(data =>setBooks(data.books))
    }, []);
    
    // console.log(books.books)

    const newSearch = books.filter(book => {
        return book.title.toLowerCase().includes(searchTerm.toLowerCase())
        ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
        ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    })



console.log(newSearch)



    


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
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                            />
                    </div>
                </div>
                </div>
                    <div className='bookcard-container'>
                        <div className="bookcard" >
                            <div className="card-content">
                                {newSearch.map(book => (<h3 className='helement'>{book.title},<br /> {book.author},<br /> {book.genre}</h3>))}
                                <button type="click" onClick={() => readReturn(prev => !prev)}>{read ? "Read" : "Return"} </button>    
                            </div>
                         
                                   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BooksList;