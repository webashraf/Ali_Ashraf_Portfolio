import { createBrowserRouter } from "react-router-dom";
import Main from "../LAYOUT/Main";
import Home from "../PAGES/HOMEE/Home/Home";
import Login from "../PAGES/Login/Login";
import Register from "../PAGES/Register/Register";

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
            }
        ]
    }
])

export default router