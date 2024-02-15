import './App.css';
import { useState } from 'react';
import NavBar from './NavBar';
import Home from './components/routes/Home';
import LoginSignup from './components/routes/LoginSignUp';
import BooksList from './components/routes/BooksList';


function App() {







  return (
    <div navbad>
      <div className='logo'>
       <img src="/images/bookend.jpg" alt="bookendlogo"/>
       </div>
       <NavBar />
       
  </div>
  );
}

export default App;
