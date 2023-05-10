import { createBrowserRouter } from "react-router-dom";
import Main from "../LAYOUT/Main";
import Home from "../PAGES/HOMEE/Home/Home";
import Login from "../PAGES/Login/Login";
import Register from "../PAGES/Register/Register";
import CheckOut from "../PAGES/CheckOut/CheckOut";

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
                element:<CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default router