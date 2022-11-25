
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGoogle, FaLongArrowAltRight, FaSmileBeam } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../../shared/Navbar/Navbar';

const SignUp = () => {
    const { loginWithGoogle, createUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const createUserOnClick = data => {
        console.log(data)
        // console.log(data.displayName, data.email, data.password, data.url, data.activity)
        createUser(data.email, data.password)
            .then(result => {
                // console.log(result);
                const user = result.user;
                toast.success(`Id for ${user.displayName} is created`);
            })
            .catch(error => console.error(error))

        const user = {
            displayName: data.displayName,
            email: data.email,
            activity: data.activity
        }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('User added successfully');
                }
            })
    }

    const handleGoogleLogIn = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                toast.success(`${user.displayName}Logged in successfully`)
                // console.log(user)

                const socialUser = {
                    displayName: user.displayName,
                    email: user.email,
                    activity: "Buyer"
                }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(socialUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                    })
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
                        <form onSubmit={handleSubmit(createUserOnClick)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register('displayName')} type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input {...register('url')} type="text" placeholder="PhotoUrl" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email')} type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password')} type="password" placeholder="password" className="input input-bordered" required />
                                {
                                    errors.password && <p className='text-red-500'>{errors.password.message}</p>
                                }
                            </div>
                            <div className='form-control'>
                                <label className="label">
                                    <span className="label-text">Choose your activity</span>
                                </label>
                                <select {...register('activity')} className="select select-accent w-full max-w-xs">
                                    <option>Buyer</option>
                                    <option>Seller</option>
                                </select>
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