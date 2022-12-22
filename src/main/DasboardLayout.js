import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const DasboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile mt-10">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-5">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-200 text-base-content">

                        <li><Link to='/dashboard'>All Buyer</Link></li>
                        <li><Link to='/dashboard/all-sellers'>All Seller</Link></li>
                        <li><Link to='/dashboard/reported-items'>Reported Items</Link></li>
                        <li><Link to='/dashboard/users'>All User</Link></li>
                    </ul>

                </div>
            </div>
            <div className='mt-8'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default DasboardLayout;