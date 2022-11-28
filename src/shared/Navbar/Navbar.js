import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/1da21df8f5b210a1ee3d46aed5c0c0a6-removebg-preview.png';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useBuyer from '../../hooks/isBuyer';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';

const Navbar = () => {
    const { user, logOUt, isLoading } = useContext(AuthContext);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);
    // console.log(user);
    const logOutOnClick = () => {
        logOUt()
            .then(() => { })
            .catch(error => console.error(error))
    }

    if (isLoading) {
        return <progress className="progress w-56"></progress>;
    }

    return (
        <div>
            <div className="navbar text-gray-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            {
                                isBuyer &&
                                <li><Link to='/my-orders'>My Orders</Link></li>
                            }
                            {
                                isSeller &&
                                <>
                                    <li><Link to='/my-products'>My Products</Link></li>
                                    <li><Link to='/add-product'>Add A Product</Link></li>
                                </>
                            }
                            {
                                isAdmin &&
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                            }
                            <div className="tooltip tooltip-bottom tooltip-success" data-tip={user?.displayName}>
                                <img className='w-10 h-10 rounded-full border-none mr-1' src={user?.photoURL} alt="" />
                            </div>
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            {
                                isBuyer &&
                                <li><Link to='/my-orders'>My Orders</Link></li>
                            }
                            {
                                isSeller &&
                                <>
                                    <li><Link to='/my-products'>My Products</Link></li>
                                    <li><Link to='/add-product'>Add A Product</Link></li>
                                </>
                            }
                            {
                                isAdmin &&
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                            }
                            <div className="tooltip tooltip-bottom tooltip-success" data-tip={user?.displayName}>
                                <img className='w-10 h-10 rounded-full border-none mr-1' src={user?.photoURL} alt="" />
                            </div>
                        </ul>
                    </div>
                </div>

                <Link to='/' className="normal-case btn btn-ghost text-3xl" >
                    <img src={logo} className='w-28 h-28 mb-2' alt="" />
                    Bike Scape</Link>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <div className="navbar-end">

                    <div className='mr-2'>
                        {
                            user?.uid ?
                                <Link onClick={logOutOnClick} className="btn btn-primary lg:btn md:btn-sm sm:btn-xs">Log out</Link>
                                :
                                <Link to='/login' className="btn btn-primary lg:btn md:btn-sm sm:btn-xs">Login</Link>
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;