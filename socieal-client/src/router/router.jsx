import { createBrowserRouter } from "react-router-dom";

import Root from './../root/Root';
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

 export const router=createBrowserRouter(


[{path:"/",element:<Root></Root>,

children:[
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/login',
        element:<Login></Login>
    }
]

}]

)
