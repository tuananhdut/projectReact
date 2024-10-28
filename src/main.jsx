import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1></h1>,
    children: [
      {
        index: true,
        element: <h1></h1>
      },
      {
        path: "/books",
        element: <h1></h1>,
      },
      {
        path: "/users",
        element: <h1></h1>,
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
