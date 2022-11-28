import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

import Navbar from '../../shared/Navbar/Navbar';

const AddProduct = () => {
    // const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    useTitle('Add a Product');

    const handleProductInfo = data => {
        // console.log(data);
        const addProduct = {
            category_name: data.category,
            name: data.name,
            email: data.email,
            brand: data.brand,
            quality: data.quality,
            resale_price: data.resalePrice,
            original_price: data.originalPrice,
            model: data.model,
            image_url: data.url,
            used: data.used,
            location: data.location,
            published_date: data.date,
            details: data.details
        }

        fetch('https://assignment-12-server-iota.vercel.app/bikes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success('Your product added successfully');
                    navigate('/my-products');
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleSubmit(handleProductInfo)} className='mt-10'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Choose a Category</span>
                    </label>
                    <select {...register('category')} className="select select-bordered">
                        <option>sports bike</option>
                        <option>scooter</option>
                        <option>touring bike</option>
                    </select>
                </div>
                <div className='grid grid-cols-2 gap-y-3 mt-3'>
                    <input {...register('name')} type="text" placeholder="Name" className="input input-bordered input-success w-full max-w-xs" required />
                    <input {...register('brand')} type="text" placeholder="Brand" className="input input-bordered input-success w-full max-w-xs" required />
                    <input {...register('model')} type="text" placeholder="Model" className="input input-bordered input-success w-full max-w-xs" required />
                    <input {...register('quality')} type="text" placeholder="Condition" className="input input-bordered input-success w-full max-w-xs" required />
                    <input {...register('resalePrice')} type="text" placeholder="Your asking Price" className="input input-bordered input-success w-full max-w-xs" required />
                    <input {...register('originalPrice')} type="text" placeholder="Original Price" className="input input-bordered input-success w-full max-w-xs" required />
                    <input {...register('url')} type="text" placeholder="Photo URL" className="input input-bordered input-success w-full max-w-xs" required />
                    <input {...register('location')} type="text" placeholder="Your Location" className="input input-bordered input-success w-full max-w-xs" required />
                    <input {...register('date')} type="text" placeholder="Date" className="input input-bordered input-success w-full max-w-xs" required />
                    <input {...register('used')} type="text" placeholder="How many years used?" className="input input-bordered input-success w-full max-w-xs" required />
                    <input {...register('email')} type="email" placeholder="Your email" className="input input-bordered input-success w-full max-w-xs" required />
                </div>
                <textarea {...register('details')} className="textarea textarea-success w-1/2 mt-4" placeholder="Product Details" required />
                <button className='btn btn-primary ml-5'>Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;