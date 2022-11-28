
import DasboardLayout from "../../main/DasboardLayout";
import Main from "../../main/Main";
import AddProduct from "../../pages/AddProduct/AddProduct";
import Blog from "../../pages/Blog/Blog";
import CategoryBikes from "../../pages/categoryBikes/CategoryBikes";
import AllBuyers from "../../pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../pages/Dashboard/AllSellers/AllSellers";
import AllUser from "../../pages/Dashboard/AllUser/AllUser";
import ReportedItems from "../../pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login";
import MyOrders from "../../pages/MyOrders/MyOrders";
import MyProducts from "../../pages/MyProducts/MyProducts";
import NotFound from "../../pages/NotFound/NotFound";
import Payment from "../../pages/Payment/Payment";
import SignUp from "../../pages/signUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../privateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                loader: ({ params }) => fetch(`https://assignment-12-server-iota.vercel.app/bikes/${params.id}`),
                element: <PrivateRoute><CategoryBikes></CategoryBikes></PrivateRoute>
            },
            {
                // it will be buyer route
                path: '/my-orders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                // it will be buyer route
                path: '/orders-payment/:id',
                loader: ({ params }) => fetch(`https://assignment-12-server-iota.vercel.app/bookings/${params.id}`),
                element: <BuyerRoute><Payment></Payment></BuyerRoute>
            },
            {
                // it will be seller route
                path: '/my-products',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                // it will be seller route
                path: '/add-product',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <AdminRoute><DasboardLayout></DasboardLayout></AdminRoute>,
        children: [
            {
                path: '/dashboard',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/all-sellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reported-items',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            }
        ]
    }


])

export default router;