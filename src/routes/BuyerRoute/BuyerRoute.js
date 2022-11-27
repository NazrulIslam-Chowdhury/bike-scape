import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useBuyer from '../../hooks/isBuyer';

const BuyerRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();

    if (isLoading || isBuyerLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isBuyer) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;