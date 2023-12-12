import { createBrowserRouter } from "react-router-dom";
import Layout from "../LayOut/Layout";


import About from "../Componets/About";
import Home from "../page/Home";
import Service from "../Componets/Service";
import Portfolio from "../Componets/Portfolio";
import Contact from "../Componets/Contact";
import Skills from "../Componets/Skil";

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
            },
            {
                path:'/project',
                element:<Portfolio/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/skill',
                element:<Skills/>
            }
        ]
    }
])

export default Router;