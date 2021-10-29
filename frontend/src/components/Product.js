import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ _id, name, category, image, price, brand, rating, numReviews, description }) => {
    return (
        <div className="card">
            <Link to={`/product/${_id}`}>
                <img src={image} alt={name} className="medium" />
            </Link>
            <div className="card-body">
                <a href={`/product/${_id}`}>
                    <h2>{name}</h2>
                </a>
                <Rating rating={rating} numReviews={numReviews} />
                <div className="price">${price}</div>
            </div>
        </div>
    );
};

export default Product;
