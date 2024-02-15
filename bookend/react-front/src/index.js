import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/routes/Home';
import User from './components/routes/User';
import BooksList from './components/routes/BooksList';
import LoginSignup from './components/routes/LoginSignUp';
import Recommendation from './components/routes/Recommendation';


const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />
    },
    {
      path: "/books",
      element: <BooksList />
    },
    {
      path: "/signup",
      element: <LoginSignup />
    },
    {
      path: "/user",
      element: <User /> 
    }
    // ,
    // {
    //   path: "/recommendation",
    //   element: <Recommendation />
    // }
  ]);


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>);