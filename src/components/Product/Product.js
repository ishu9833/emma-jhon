import React from 'react';
import './Product.css'
const Product = ({product, handleAddToCart}) => {
    const { img,  name, seller, price, ratings } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart &nbsp; <i className="fa-solid fa-cart-plus"></i></p>
            </button>
        </div>
    );
};

export default Product;