import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaArrowAltCircleRight, FaGoogle, FaLongArrowAltRight, FaSmileBeam } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../../shared/Navbar/Navbar';

const Login = () => {
    const { loginWithGoogle, loginWithEmail } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const loginOnClick = data => {
        console.log(data);
        loginWithEmail(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('Login successfully')
                console.log(user)
            })
            .catch(error => console.error(error))
    }

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
            <div className="hero min-h-screen bg-base-200 mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login</h1>
                        <p className="py-6">Login for continuing to sell your used products and Get a great deal <FaSmileBeam className='h-12 w-12 mt-2' /> </p>
                    </div>
                    <form onClick={handleSubmit(loginOnClick)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email', { required: true })} type="email" placeholder="email" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password', { required: true })} type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <p>Don't have an account ? <Link to='/signup' className='font-semibold text-lg'>Sign up now</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <button onClick={handleGoogleLogIn} className="btn btn-primary mt-5"><FaGoogle className='mr-2' /> Login with Google <FaLongArrowAltRight className='ml-2 h-6 w-6' /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;