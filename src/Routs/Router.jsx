import { createBrowserRouter } from "react-router-dom";
import Layout from "../LayOut/Layout";


import About from "../Componets/About";
import Home from "../page/Home";
import Service from "../Componets/Service";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
              path:'/',
              element:<Home/>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/service',
                element:<Service/>
            }
        ]
    }
])

export default Router;