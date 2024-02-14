import './App.css';
import NavBar from './NavBar';
import Home from './components/routes/Home';
import LoginSignup from './components/routes/LoginSignUp';



function App() {
  return (
    <div>
      <div className='logo'>
       <img src="/images/bookend.jpg" alt="bookendlogo"/>
       </div>
       <NavBar />
       {/* <Home /> */}
       {/* <LoginSignup /> */}
  </div>
  );
}

export default App;
