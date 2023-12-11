import { createBrowserRouter } from "react-router-dom";
import Layout from "../LayOut/Layout";

import Banner from "../Componets/Banner";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
              path:'/',
              element:<Banner></Banner>
            }
        ]
    }
])

export default Router;