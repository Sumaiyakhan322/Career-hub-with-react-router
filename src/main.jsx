import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import AppiledJobs from './Components/AppliedJobs/AppiledJobs';
import Blogs from './Components/Blogs/Blogs';
import Static from './Components/Static/Static';
import ErrorPage from './Components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },{
        path:'/applied',
        element:<AppiledJobs></AppiledJobs>
      },{
        path:'/blogs',
        element:<Blogs></Blogs>
      },{
        path:'/static',
        element:<Static></Static>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  
  </React.StrictMode>,
)
