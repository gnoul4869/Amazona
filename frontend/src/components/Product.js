import React from 'react';
import Rating from './Rating';

const Product = ({ id, name, category, image, price, brand, rating, numReviews, description }) => {
    return (
        <div className="card">
            <a href={`/product/${id}`}>
                <img src={image} alt={name} className="medium" />
            </a>
            <div className="card-body">
                <a href={`/product/${id}`}>
                    <h2>{name}</h2>
                </a>
                <Rating props={{ rating, numReviews }} />
                <div className="price">${price}</div>
            </div>
        </div>
    );
};

export default Product;
