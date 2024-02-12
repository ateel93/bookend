import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/routes/Home';
import Books from './components/routes/BooksList';
import User from './components/routes/User';


const router = createBrowserRouter([

    {
      path: "/",
      element: <App />,
      children: [
      {
        path: "/",
        element: <Home />
        },
        {
          path: "/books",
          element: <Books />
      },
      {
          path: "/user",
          element: <User />
          
      }
        ]
    }
  ]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

