import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (isLoading || isSellerLoading) {
        return <div className='flex justify-center'><progress className="progress w-56"></progress></div>;
    }

    if (user && isSeller) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default SellerRoute;