import { createBrowserRouter } from "react-router-dom";
import Main from "../LAYOUT/Main";
import CheckOut from "../PAGES/CheckOut/CheckOut";
import Home from "../PAGES/HOMEE/Home/Home";
import Login from "../PAGES/Login/Login";
import Orders from "../PAGES/Orders/Orders";
import Register from "../PAGES/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'checkout/:id',
                element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({params}) => fetch(`https://car-doctor-server-pink.vercel.app/services/${params.id}`)
            },
            {
                path: 'orders',
                element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            }
        ]
    }
])

export default router