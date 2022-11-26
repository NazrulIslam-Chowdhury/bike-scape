import React, { useContext } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useBuyer from '../../hooks/isBuyer';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const [isBuyer] = useBuyer(user?.email);
    const location = useLoaderData();

    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isBuyer) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;