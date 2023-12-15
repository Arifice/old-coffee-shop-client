import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import User from './Components/User.jsx';
import Root from './Components/Root.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path: "/",
        loader:()=>fetch(' https://old-coffee-shop-server.vercel.app/coffee'),
        element: <App></App>
        
      },
      {
        path: '/addcoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path: '/updatecoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(` https://old-coffee-shop-server.vercel.app/coffee/${params.id}`)
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/user',
        element:<User></User>,
        loader:()=>fetch(' https://old-coffee-shop-server.vercel.app/user'),
      }
    ]
  },
 

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);