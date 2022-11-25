
import Main from "../../main/Main";
import Blog from "../../pages/Blog/Blog";
import CategoryBikes from "../../pages/categoryBikes/CategoryBikes";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                // it will be in private route
                path: '/category-bikes/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <CategoryBikes></CategoryBikes>
            },
        ]
    }
])

export default router;