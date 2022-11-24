import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaArrowAltCircleRight, FaGoogle, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../../shared/Navbar/Navbar';

const Login = () => {
    const { loginWithGoogle } = useContext(AuthContext);

    const handleGoogleLogIn = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                toast.success(`${user.displayName}Logged in successfully`)
                // console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='my-52 mx-96 p-5 bg-base-200 hover:bg-base-300'>
                <button onClick={handleGoogleLogIn} className='text-xl flex items-center mx-auto gap-x-2 '>
                    <FaGoogle /> Login with Google <FaLongArrowAltRight />
                </button>
            </div>
            <Link to='/signup'>
                <button className='flex items-center gap-x-2 mx-auto  btn-primary px-5 py-3 font-semibold text-lg'>Seller? <FaArrowAltCircleRight /></button>
            </Link>
        </div>
    );
};

export default Login;