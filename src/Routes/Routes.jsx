import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import AddCraft from "../Pages/AddCraft/AddCraft";
import Home from "../Pages/Home/Home";
import AllArts from "../Pages/AllArts/AllArts";
import ViewDetails from "../Components/ViewDetails/ViewDetails";


export const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/allArt',
        element:<AllArts/>
      },
      {
        path:'/addCraft',
        element:<PrivateRoute><AddCraft/></PrivateRoute>
      },
      {
        path:'/viewDetails/:id',
        element:<PrivateRoute><ViewDetails/></PrivateRoute>,
        loader:()=>fetch("http://localhost:5000/crafts")
      },
    ]
  }
])