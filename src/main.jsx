import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserPage from './pages/user.jsx';
import ErrorPage from './pages/error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <h1></h1>,
      },
      {
        path: "/books",
        element: <h1></h1>,
      },
      {
        path: "/users",
        element: <UserPage />,
      }
    ]
  },
  {
    path: "/login",
    element: <h1></h1>,
  },
  {
    path: "/register",
    element: <h1></h1>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <RouterProvider router={router} />
  // <App />
  // </React.StrictMode>,
)
