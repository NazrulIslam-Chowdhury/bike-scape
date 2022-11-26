
import Main from "../../main/Main";
import AddProduct from "../../pages/AddProduct/AddProduct";
import Blog from "../../pages/Blog/Blog";
import CategoryBikes from "../../pages/categoryBikes/CategoryBikes";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login";
import MyOrders from "../../pages/MyOrders/MyOrders";
import MyProducts from "../../pages/MyProducts/MyProducts";
import SignUp from "../../pages/signUp/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";

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
            {
                // it will be buyer route
                path: '/my-orders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                // it will be seller route
                path: '/my-products',
                element: <MyProducts></MyProducts>
            },
            {
                // it will be seller route
                path: '/add-product',
                element: <AddProduct></AddProduct>
            },
        ]
    }
])

export default router;