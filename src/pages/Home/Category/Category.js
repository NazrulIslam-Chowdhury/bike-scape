import React from 'react';

const Category = ({ category }) => {
    const { category: bikeCategory, img } = category;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-200 shadow-2xl rounded-none">
                <figure><img src={img} alt="Bike" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bikeCategory}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary font-bold">View Products</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;