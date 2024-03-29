import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGoogle, FaLongArrowAltRight, FaSmileBeam } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Navbar from '../../shared/Navbar/Navbar';

const Login = () => {
    const { loginWithGoogle, loginWithEmail } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Login');

    const from = location.state?.from?.pathname || '/';


    const loginOnClick = data => {
        // console.log(data);
        loginWithEmail(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('Login successfully')
                // console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleGoogleLogIn = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                // console.log(user)
                toast.success(`${user.displayName}Logged in successfully`)
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login</h1>
                        <p className="py-6">Login for continuing to sell your used products and Get a great deal <FaSmileBeam className='h-12 w-12 mt-2' /> </p>
                    </div>
                    <form onSubmit={handleSubmit(loginOnClick)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-white">Email</span>
                                </label>
                                <input {...register('email', { required: true })} type="email" placeholder="email" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-white">Password</span>
                                </label>
                                <input {...register('password', { required: true })} type="password" placeholder="password" className="input input-bordered" />
                                {
                                    errors.password && <p className='text-red-500 text-lg font-semibold'>{errors.password.message}</p>
                                }
                                <label className="label">
                                    <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <p>Don't have an account ? <Link to='/signup' className='font-semibold text-lg'>Sign up now</Link></p>
                            <p className='text-lg font-semibold text-gray-300 mt-2'><strong>Note:</strong> Without registration you can not see your ordered products or selling products.</p>
                            <div className="form-control mt-6">
                                <button className="btn bg-red-600 hover:bg-red-800 text-xl text-white uppercase">Login</button>
                                <button onClick={handleGoogleLogIn} className="btn btn-primary text-xl text-white uppercase mt-5"><FaGoogle className='mr-2' /> Login with Google <FaLongArrowAltRight className='ml-2 h-6 w-6' /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;