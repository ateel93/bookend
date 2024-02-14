import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Home from './components/routes/Home';
import LoginSignup from './components/routes/LoginSignUp';
import BookMap from './components/routes/BookMap';


function App() {

const [books, setBooks] = useState([])


useEffect(() => {
  fetch('LINK HERE')
  .then(resp => resp.json())
  .then(data =>setBooks(data))
}, []);




  return (
    <div navbad>
      <div className='logo'>
       <img src="/images/bookend.jpg" alt="bookendlogo"/>
       </div>
       <NavBar />
       <BookMap  books={books}/>
  </div>
  );
}

export default App;
