import React from 'react';
import { useParams } from 'react-router';
import data from '../data';

const ProductScreen = () => {
    const { id } = useParams();
    const product = data.products.find((item) => item.id === id);
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="col-1"></div>
                <div className="col-1"></div>
            </div>
        </div>
    );
    // return <div>test</div>;
};

export default ProductScreen;
