import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGoogle, FaLongArrowAltRight, FaSmileBeam } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../../shared/Navbar/Navbar';

const SignUp = () => {
    const { loginWithGoogle, createUser } = useContext(AuthContext);
    // const { register, formState: { errors }, handleSubmit } = useForm();

    const createUserOnClick = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        console.log(name, email, password, url)
        createUser(email, password, name, url)
            .then(result => {
                // console.log(result);
                const user = result.user;
                toast.success(`Id for ${user?.displayName} is created`);
                console.log(user);
                form.reset();
            })
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
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <p className="py-6">Sign-up for sell your used products and Get a great deal <FaSmileBeam className='h-12 w-12 mt-2' /> </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={createUserOnClick} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input name='url' type="text" placeholder="PhotoUrl" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                            <p>Already have an account ? <Link to='/login' className='font-semibold text-lg'>Login</Link></p>
                        </form>
                        <button onClick={handleGoogleLogIn} className="btn btn-primary mt-5"><FaGoogle className='mr-2' /> Continuing with Google <FaLongArrowAltRight className='ml-2 h-6 w-6' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;