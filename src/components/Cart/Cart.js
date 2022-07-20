import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total = 0
    let shipping = 0
    for(const products of cart){
        total = total + products.price
        shipping = shipping + products.shipping
    }
    const tax = (total * 0.1).toFixed(2)
    return (
        <div className='cart'>
            <h3>This is for carts</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total shipping cost: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${}</h4>
        </div>
    );
};

export default Cart;